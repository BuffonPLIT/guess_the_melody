import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Card,
  CardContent,
  Grid,
  Chip,
  Alert,
  Divider
} from '@mui/material';

// Энергопотребление холодильников по классам (кВт⋅ч/год на 100л)
const energyConsumption = {
  'A+++': 22,  // Самый эффективный
  'A++': 33,
  'A+': 44,
  'A': 55,
  'B': 75,
  'C': 95,
  'D': 110,
  'E': 125,
  'F': 150,    // Наименее эффективный
  'G': 175     // Старые модели
};

const RefrigeratorCalculator = () => {
  const [currentClass, setCurrentClass] = useState('F');
  const [newClass, setNewClass] = useState('A');
  const [capacity, setCapacity] = useState(300);
  const [electricityRate, setElectricityRate] = useState(0.65); // PLN per kWh (average in Poland 2024)
  const [results, setResults] = useState(null);

  const energyClasses = Object.keys(energyConsumption);

  const calculateSavings = React.useCallback(() => {
    const currentConsumption = (energyConsumption[currentClass] * capacity) / 100;
    const newConsumption = (energyConsumption[newClass] * capacity) / 100;
    
    const annualSavingsKWh = currentConsumption - newConsumption;
    const annualSavingsPLN = annualSavingsKWh * electricityRate;
    const monthlySavingsPLN = annualSavingsPLN / 12;
    
    const currentAnnualCost = currentConsumption * electricityRate;
    const newAnnualCost = newConsumption * electricityRate;
    
    const savingsPercentage = ((currentConsumption - newConsumption) / currentConsumption) * 100;

    return {
      currentConsumption: currentConsumption.toFixed(1),
      newConsumption: newConsumption.toFixed(1),
      annualSavingsKWh: annualSavingsKWh.toFixed(1),
      annualSavingsPLN: annualSavingsPLN.toFixed(2),
      monthlySavingsPLN: monthlySavingsPLN.toFixed(2),
      currentAnnualCost: currentAnnualCost.toFixed(2),
      newAnnualCost: newAnnualCost.toFixed(2),
      savingsPercentage: savingsPercentage.toFixed(1)
    };
  }, [currentClass, newClass, capacity, electricityRate]);

  useEffect(() => {
    setResults(calculateSavings());
  }, [calculateSavings]);

  const getClassColor = (energyClass) => {
    const colors = {
      'A+++': '#00C851',
      'A++': '#2E7D32',
      'A+': '#4CAF50',
      'A': '#8BC34A',
      'B': '#CDDC39',
      'C': '#FFEB3B',
      'D': '#FFC107',
      'E': '#FF9800',
      'F': '#FF5722',
      'G': '#F44336'
    };
    return colors[energyClass] || '#9E9E9E';
  };

  return (
    <Box sx={{ p: 3, maxWidth: 800, margin: '0 auto' }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4 }}>
        🧊 Калькулятор экономии энергии холодильников
      </Typography>
      
      <Typography variant="subtitle1" gutterBottom align="center" sx={{ mb: 3, color: 'text.secondary' }}>
        Рассчитайте, сколько злотых вы сэкономите в год при покупке энергоэффективного холодильника в Польше
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card elevation={2}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Параметры расчета
              </Typography>
              
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Текущий класс энергоэффективности</InputLabel>
                <Select
                  value={currentClass}
                  onChange={(e) => setCurrentClass(e.target.value)}
                  label="Текущий класс энергоэффективности"
                >
                  {energyClasses.map((cls) => (
                    <MenuItem key={cls} value={cls}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Chip 
                          label={cls} 
                          size="small" 
                          sx={{ 
                            backgroundColor: getClassColor(cls), 
                            color: 'white',
                            minWidth: 50
                          }} 
                        />
                        <span>{energyConsumption[cls]} кВт⋅ч/год на 100л</span>
                      </Box>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Новый класс энергоэффективности</InputLabel>
                <Select
                  value={newClass}
                  onChange={(e) => setNewClass(e.target.value)}
                  label="Новый класс энергоэффективности"
                >
                  {energyClasses.map((cls) => (
                    <MenuItem key={cls} value={cls}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Chip 
                          label={cls} 
                          size="small" 
                          sx={{ 
                            backgroundColor: getClassColor(cls), 
                            color: 'white',
                            minWidth: 50
                          }} 
                        />
                        <span>{energyConsumption[cls]} кВт⋅ч/год на 100л</span>
                      </Box>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextField
                fullWidth
                label="Объем холодильника (литры)"
                type="number"
                value={capacity}
                onChange={(e) => setCapacity(Number(e.target.value))}
                sx={{ mb: 2 }}
                inputProps={{ min: 50, max: 1000 }}
              />

              <TextField
                fullWidth
                label="Тариф на электроэнергию (PLN за кВт⋅ч)"
                type="number"
                value={electricityRate}
                onChange={(e) => setElectricityRate(Number(e.target.value))}
                inputProps={{ min: 0.1, max: 2, step: 0.01 }}
                helperText="Средний тариф в Польше: 0.65 PLN/кВт⋅ч"
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          {results && (
            <Card elevation={2}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Результаты расчета
                </Typography>

                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2" color="text.secondary">
                    Текущее потребление (класс {currentClass}):
                  </Typography>
                  <Typography variant="h6" color="error">
                    {results.currentConsumption} кВт⋅ч/год
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Стоимость: {results.currentAnnualCost} PLN/год
                  </Typography>
                </Box>

                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2" color="text.secondary">
                    Новое потребление (класс {newClass}):
                  </Typography>
                  <Typography variant="h6" color="success.main">
                    {results.newConsumption} кВт⋅ч/год
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Стоимость: {results.newAnnualCost} PLN/год
                  </Typography>
                </Box>

                <Divider sx={{ my: 2 }} />

                <Box sx={{ mb: 2 }}>
                  <Typography variant="h6" color="primary" gutterBottom>
                    💰 Ваша экономия:
                  </Typography>
                  
                  <Alert severity="success" sx={{ mb: 1 }}>
                    <Typography variant="h5">
                      {results.annualSavingsPLN} PLN в год
                    </Typography>
                  </Alert>
                  
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    📅 {results.monthlySavingsPLN} PLN в месяц
                  </Typography>
                  
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    ⚡ {results.annualSavingsKWh} кВт⋅ч в год
                  </Typography>
                  
                  <Typography variant="body1">
                    📊 {results.savingsPercentage}% экономии энергии
                  </Typography>
                </Box>

                {parseFloat(results.savingsPercentage) > 30 && (
                  <Alert severity="info">
                    Отличный выбор! Экономия более 30% существенно снизит ваши счета за электричество.
                  </Alert>
                )}
              </CardContent>
            </Card>
          )}
        </Grid>
      </Grid>

      <Box sx={{ mt: 3 }}>
        <Typography variant="body2" color="text.secondary" align="center">
          💡 Совет: Холодильники класса A+++ потребляют в 7-8 раз меньше энергии, чем устаревшие модели класса F или G.
          Инвестиция в энергоэффективный холодильник окупается за 3-5 лет за счет экономии на электричестве.
        </Typography>
      </Box>
    </Box>
  );
};

export default RefrigeratorCalculator;