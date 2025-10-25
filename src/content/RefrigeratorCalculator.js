import React, { useState, useEffect } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Alert,
  Divider
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  REFRIGERATOR_CLASSES,
  ELECTRICITY_RATES_POLAND,
  CALCULATION_FACTORS
} from '../constants/refrigeratorData';

const StyledCard = styled(Card)(({ theme }) => ({
  margin: theme.spacing(2),
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: 'white',
  borderRadius: 16,
  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
}));

const ComparisonCard = styled(Card)(({ theme }) => ({
  margin: theme.spacing(1),
  borderRadius: 12,
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
  },
}));

const RefrigeratorCalculator = () => {
  const [selectedRegion, setSelectedRegion] = useState('warsaw');
  const [comparisonResults, setComparisonResults] = useState([]);

  // Расчет экономии для каждого класса холодильника
  const calculateSavings = () => {
    const baseClass = 'F'; // Сравниваем с наименее эффективным классом F
    const baseConsumption = REFRIGERATOR_CLASSES[baseClass].annualConsumption;
    const electricityRate = ELECTRICITY_RATES_POLAND.regions[selectedRegion].rate;
    
    const results = Object.entries(REFRIGERATOR_CLASSES).map(([key, classData]) => {
      const annualConsumption = classData.annualConsumption;
      const annualCost = annualConsumption * electricityRate;
      const savings = (baseConsumption - annualConsumption) * electricityRate;
      const totalSavings15Years = savings * CALCULATION_FACTORS.averageLifespan;
      
      // Расчет с учетом инфляции
      let totalSavingsWithInflation = 0;
      for (let year = 1; year <= CALCULATION_FACTORS.averageLifespan; year++) {
        const inflatedRate = electricityRate * Math.pow(1 + CALCULATION_FACTORS.electricityInflationRate, year - 1);
        const yearSavings = (baseConsumption - annualConsumption) * inflatedRate;
        totalSavingsWithInflation += yearSavings;
      }

      return {
        class: key,
        ...classData,
        annualConsumption,
        annualCost: Math.round(annualCost * 100) / 100,
        annualSavings: Math.round(savings * 100) / 100,
        totalSavings15Years: Math.round(totalSavings15Years * 100) / 100,
        totalSavingsWithInflation: Math.round(totalSavingsWithInflation * 100) / 100,
        co2Savings: Math.round((baseConsumption - annualConsumption) * 0.4 * 100) / 100, // кг CO2 в год
      };
    });

    // Сортируем по экономии (от наибольшей к наименьшей)
    return results.sort((a, b) => b.annualSavings - a.annualSavings);
  };

  useEffect(() => {
    setComparisonResults(calculateSavings());
  }, [selectedRegion]);

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <StyledCard>
        <CardContent>
          <Typography variant="h4" component="h1" gutterBottom align="center">
            🧊 Калькулятор энергосбережения холодильников
          </Typography>
          <Typography variant="h6" align="center" sx={{ mb: 3 }}>
            Рассчитайте экономию в злотых при покупке энергоэффективного холодильника в Польше
          </Typography>
          
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel sx={{ color: 'white' }}>Выберите регион</InputLabel>
                <Select
                  value={selectedRegion}
                  onChange={handleRegionChange}
                  sx={{ 
                    color: 'white',
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'white',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'white',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'white',
                    }
                  }}
                >
                  {Object.entries(ELECTRICITY_RATES_POLAND.regions).map(([key, region]) => (
                    <MenuItem key={key} value={key}>
                      {region.name} - {region.rate} PLN/кВт⋅ч
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <Alert severity="info" sx={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'white' }}>
                <Typography variant="body2">
                  <strong>Тариф:</strong> {ELECTRICITY_RATES_POLAND.regions[selectedRegion].rate} PLN за кВт⋅ч
                </Typography>
                <Typography variant="body2">
                  <strong>Сравнение с классом F</strong> (наименее эффективный)
                </Typography>
              </Alert>
            </Grid>
          </Grid>
        </CardContent>
      </StyledCard>

      <Typography variant="h5" sx={{ mt: 4, mb: 2, textAlign: 'center' }}>
        💰 Экономия по классам энергоэффективности
      </Typography>

      <Grid container spacing={2}>
        {comparisonResults.map((result) => (
          <Grid item xs={12} sm={6} md={4} key={result.class}>
            <ComparisonCard>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Chip
                    label={result.name}
                    sx={{
                      backgroundColor: result.color,
                      color: 'white',
                      fontWeight: 'bold',
                      mr: 1
                    }}
                  />
                  <Typography variant="body2" color="text.secondary">
                    {result.description}
                  </Typography>
                </Box>

                <Typography variant="h6" color="primary" gutterBottom>
                  Экономия в год: {result.annualSavings} PLN
                </Typography>

                <Typography variant="body2" color="text.secondary" paragraph>
                  Потребление: {result.annualConsumption} кВт⋅ч/год
                </Typography>

                <Typography variant="body2" color="text.secondary" paragraph>
                  Стоимость в год: {result.annualCost} PLN
                </Typography>

                <Divider sx={{ my: 1 }} />

                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  За 15 лет: {result.totalSavings15Years} PLN
                </Typography>

                <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'green' }}>
                  С учетом инфляции: {result.totalSavingsWithInflation} PLN
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  CO₂ экономия: {result.co2Savings} кг/год
                </Typography>
              </CardContent>
            </ComparisonCard>
          </Grid>
        ))}
      </Grid>

      <Card sx={{ mt: 4 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            📊 Детальное сравнение
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Класс</TableCell>
                  <TableCell align="right">Потребление (кВт⋅ч/год)</TableCell>
                  <TableCell align="right">Стоимость в год (PLN)</TableCell>
                  <TableCell align="right">Экономия в год (PLN)</TableCell>
                  <TableCell align="right">Экономия за 15 лет (PLN)</TableCell>
                  <TableCell align="right">CO₂ экономия (кг/год)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {comparisonResults.map((result) => (
                  <TableRow key={result.class}>
                    <TableCell>
                      <Chip
                        label={result.name}
                        size="small"
                        sx={{ backgroundColor: result.color, color: 'white' }}
                      />
                    </TableCell>
                    <TableCell align="right">{result.annualConsumption}</TableCell>
                    <TableCell align="right">{result.annualCost}</TableCell>
                    <TableCell align="right" sx={{ color: result.annualSavings > 0 ? 'green' : 'red' }}>
                      {result.annualSavings > 0 ? '+' : ''}{result.annualSavings}
                    </TableCell>
                    <TableCell align="right" sx={{ color: result.totalSavings15Years > 0 ? 'green' : 'red' }}>
                      {result.totalSavings15Years > 0 ? '+' : ''}{result.totalSavings15Years}
                    </TableCell>
                    <TableCell align="right">{result.co2Savings}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>

      <Alert severity="success" sx={{ mt: 3 }}>
        <Typography variant="body1">
          <strong>💡 Совет:</strong> Покупка холодильника класса A+++ вместо F может сэкономить вам до {Math.max(...comparisonResults.map(r => r.totalSavingsWithInflation))} PLN за 15 лет использования!
        </Typography>
      </Alert>
    </Box>
  );
};

export default RefrigeratorCalculator;