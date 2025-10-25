import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  Grid,
  Alert,
  Chip,
  Divider
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  margin: theme.spacing(2),
  maxWidth: 800,
  margin: '0 auto',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: 'white'
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.5)',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(255, 255, 255, 0.8)',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: 'white',
  }
}));

const StyledSelect = styled(FormControl)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.5)',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(255, 255, 255, 0.8)',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: 'white',
  }
}));

const RefrigeratorCalculator = () => {
  const [currentClass, setCurrentClass] = useState('');
  const [newClass, setNewClass] = useState('');
  const [customConsumption, setCustomConsumption] = useState('');
  const [electricityPrice, setElectricityPrice] = useState('0.85');
  const [results, setResults] = useState(null);

  // Данные по энергопотреблению холодильников по классам (кВт⋅ч/год)
  const energyConsumption = {
    'A+++': 150,
    'A++': 200,
    'A+': 250,
    'A': 300,
    'B': 400,
    'C': 500,
    'D': 600,
    'E': 700,
    'F': 800
  };

  // Цвета для классов энергоэффективности
  const classColors = {
    'A+++': '#4CAF50',
    'A++': '#8BC34A',
    'A+': '#CDDC39',
    'A': '#FFEB3B',
    'B': '#FFC107',
    'C': '#FF9800',
    'D': '#FF5722',
    'E': '#F44336',
    'F': '#D32F2F'
  };

  const calculateSavings = () => {
    if (!currentClass || !newClass) {
      alert('Пожалуйста, выберите текущий и новый класс энергоэффективности');
      return;
    }

    const currentConsumption = customConsumption ? 
      parseFloat(customConsumption) : 
      energyConsumption[currentClass];
    
    const newConsumption = energyConsumption[newClass];
    const price = parseFloat(electricityPrice);

    if (isNaN(currentConsumption) || isNaN(newConsumption) || isNaN(price)) {
      alert('Пожалуйста, введите корректные числовые значения');
      return;
    }

    const annualSavings = (currentConsumption - newConsumption) * price;
    const monthlySavings = annualSavings / 12;
    const dailySavings = annualSavings / 365;

    setResults({
      currentConsumption,
      newConsumption,
      annualSavings,
      monthlySavings,
      dailySavings,
      currentClass,
      newClass
    });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('pl-PL', {
      style: 'currency',
      currency: 'PLN',
      minimumFractionDigits: 2
    }).format(amount);
  };

  return (
    <StyledCard>
      <CardContent>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          🧊 Калькулятор экономии холодильника
        </Typography>
        <Typography variant="subtitle1" align="center" sx={{ mb: 3, opacity: 0.9 }}>
          Рассчитайте экономию в злотых при покупке энергоэффективного холодильника
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <StyledSelect fullWidth>
              <InputLabel>Текущий класс энергоэффективности</InputLabel>
              <Select
                value={currentClass}
                onChange={(e) => setCurrentClass(e.target.value)}
                label="Текущий класс энергоэффективности"
              >
                {Object.keys(energyConsumption).map((className) => (
                  <MenuItem key={className} value={className}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Chip 
                        label={className} 
                        size="small" 
                        sx={{ 
                          backgroundColor: classColors[className],
                          color: 'white',
                          fontWeight: 'bold'
                        }} 
                      />
                      <span>{energyConsumption[className]} кВт⋅ч/год</span>
                    </Box>
                  </MenuItem>
                ))}
              </Select>
            </StyledSelect>
          </Grid>

          <Grid item xs={12} md={6}>
            <StyledSelect fullWidth>
              <InputLabel>Новый класс энергоэффективности</InputLabel>
              <Select
                value={newClass}
                onChange={(e) => setNewClass(e.target.value)}
                label="Новый класс энергоэффективности"
              >
                {Object.keys(energyConsumption).map((className) => (
                  <MenuItem key={className} value={className}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Chip 
                        label={className} 
                        size="small" 
                        sx={{ 
                          backgroundColor: classColors[className],
                          color: 'white',
                          fontWeight: 'bold'
                        }} 
                      />
                      <span>{energyConsumption[className]} кВт⋅ч/год</span>
                    </Box>
                  </MenuItem>
                ))}
              </Select>
            </StyledSelect>
          </Grid>

          <Grid item xs={12} md={6}>
            <StyledTextField
              fullWidth
              label="Собственное потребление (кВт⋅ч/год)"
              value={customConsumption}
              onChange={(e) => setCustomConsumption(e.target.value)}
              helperText="Оставьте пустым для использования стандартных значений"
              type="number"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <StyledTextField
              fullWidth
              label="Цена электроэнергии (PLN/кВт⋅ч)"
              value={electricityPrice}
              onChange={(e) => setElectricityPrice(e.target.value)}
              helperText="Средняя цена в Польше: 0.85 PLN/кВт⋅ч"
              type="number"
              step="0.01"
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              size="large"
              fullWidth
              onClick={calculateSavings}
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                fontWeight: 'bold',
                py: 1.5,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                }
              }}
            >
              Рассчитать экономию
            </Button>
          </Grid>

          {results && (
            <Grid item xs={12}>
              <Divider sx={{ my: 2, borderColor: 'rgba(255, 255, 255, 0.3)' }} />
              
              <Alert 
                severity="success" 
                sx={{ 
                  backgroundColor: 'rgba(76, 175, 80, 0.2)',
                  color: 'white',
                  border: '1px solid rgba(76, 175, 80, 0.3)'
                }}
              >
                <Typography variant="h6" gutterBottom>
                  💰 Результаты расчета экономии
                </Typography>
                
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body1">
                      <strong>Текущее потребление:</strong> {results.currentConsumption} кВт⋅ч/год
                    </Typography>
                    <Typography variant="body1">
                      <strong>Новое потребление:</strong> {results.newConsumption} кВт⋅ч/год
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body1">
                      <strong>Экономия в год:</strong> {formatCurrency(results.annualSavings)}
                    </Typography>
                    <Typography variant="body1">
                      <strong>Экономия в месяц:</strong> {formatCurrency(results.monthlySavings)}
                    </Typography>
                    <Typography variant="body1">
                      <strong>Экономия в день:</strong> {formatCurrency(results.dailySavings)}
                    </Typography>
                  </Grid>
                </Grid>

                <Box sx={{ mt: 2, p: 2, backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: 1 }}>
                  <Typography variant="body2" align="center">
                    Переход с класса <Chip label={results.currentClass} size="small" sx={{ backgroundColor: classColors[results.currentClass], color: 'white' }} /> 
                    на класс <Chip label={results.newClass} size="small" sx={{ backgroundColor: classColors[results.newClass], color: 'white' }} /> 
                    сэкономит вам <strong>{formatCurrency(results.annualSavings)}</strong> в год!
                  </Typography>
                </Box>
              </Alert>
            </Grid>
          )}

          <Grid item xs={12}>
            <Divider sx={{ my: 2, borderColor: 'rgba(255, 255, 255, 0.3)' }} />
            <Typography variant="body2" align="center" sx={{ opacity: 0.8 }}>
              💡 <strong>Совет:</strong> Класс A+++ самый энергоэффективный и обеспечивает максимальную экономию. 
              Средняя цена электроэнергии в Польше составляет 0.85 PLN за кВт⋅ч.
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </StyledCard>
  );
};

export default RefrigeratorCalculator;