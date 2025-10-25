import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Card,
  CardContent,
  Alert,
} from '@mui/material';

function RefrigeratorCalculator() {
  const [electricityPrice, setElectricityPrice] = useState(0.80); // PLN за кВтч (средняя цена в Польше 2024)

  // Типичное потребление энергии для холодильников разных классов (кВтч/год)
  // Базируется на среднем холодильнике объемом ~300л
  const energyConsumption = {
    A: 150,   // Самый эффективный
    B: 180,
    C: 220,
    D: 260,
    E: 310,
    F: 370,   // Наименее эффективный
  };

  // Расчет годовой стоимости электроэнергии
  const calculateYearlyCost = (energyClass) => {
    return (energyConsumption[energyClass] * electricityPrice).toFixed(2);
  };

  // Расчет экономии относительно класса F (наихудший)
  const calculateSavings = (energyClass) => {
    const worstCost = energyConsumption.F * electricityPrice;
    const currentCost = energyConsumption[energyClass] * electricityPrice;
    return (worstCost - currentCost).toFixed(2);
  };

  // Расчет экономии за 10 лет
  const calculateSavings10Years = (energyClass) => {
    return (calculateSavings(energyClass) * 10).toFixed(2);
  };

  // Расчет разницы в потреблении (%)
  const calculateConsumptionDifference = (energyClass) => {
    const difference = ((energyConsumption.F - energyConsumption[energyClass]) / energyConsumption.F) * 100;
    return difference.toFixed(1);
  };

  const energyClasses = ['A', 'B', 'C', 'D', 'E', 'F'];

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ color: '#2c3e50', fontWeight: 'bold', marginBottom: 3 }}>
        Калькулятор энергосбережения холодильников в Польше
      </Typography>

      <Alert severity="info" sx={{ marginBottom: 3 }}>
        Расчеты основаны на среднем холодильнике объемом ~300 литров при работе 24/7
      </Alert>

      <Card sx={{ marginBottom: 3, backgroundColor: '#e3f2fd' }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Настройки
          </Typography>
          <TextField
            label="Стоимость электроэнергии (PLN/кВтч)"
            type="number"
            value={electricityPrice}
            onChange={(e) => setElectricityPrice(parseFloat(e.target.value) || 0)}
            inputProps={{ step: 0.01, min: 0 }}
            sx={{ width: '300px' }}
            size="small"
          />
          <Typography variant="caption" display="block" sx={{ marginTop: 1, color: '#666' }}>
            Средняя цена в Польше в 2024: ~0.70-0.90 PLN/кВтч
          </Typography>
        </CardContent>
      </Card>

      <TableContainer component={Paper} sx={{ marginBottom: 3 }}>
        <Table>
          <TableHead sx={{ backgroundColor: '#1976d2' }}>
            <TableRow>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Класс энергоэффективности</TableCell>
              <TableCell align="right" sx={{ color: 'white', fontWeight: 'bold' }}>
                Потребление (кВтч/год)
              </TableCell>
              <TableCell align="right" sx={{ color: 'white', fontWeight: 'bold' }}>
                Стоимость в год (PLN)
              </TableCell>
              <TableCell align="right" sx={{ color: 'white', fontWeight: 'bold' }}>
                Экономия в год (PLN)
              </TableCell>
              <TableCell align="right" sx={{ color: 'white', fontWeight: 'bold' }}>
                Экономия за 10 лет (PLN)
              </TableCell>
              <TableCell align="right" sx={{ color: 'white', fontWeight: 'bold' }}>
                Экономия энергии (%)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {energyClasses.map((energyClass, index) => {
              const savings = parseFloat(calculateSavings(energyClass));
              const bgColor =
                energyClass === 'A'
                  ? '#c8e6c9'
                  : energyClass === 'B'
                    ? '#dcedc8'
                    : energyClass === 'C'
                      ? '#fff9c4'
                      : energyClass === 'D'
                        ? '#ffe0b2'
                        : energyClass === 'E'
                          ? '#ffccbc'
                          : '#ffcdd2';

              return (
                <TableRow key={energyClass} sx={{ backgroundColor: bgColor }}>
                  <TableCell component="th" scope="row" sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
                    Класс {energyClass}
                  </TableCell>
                  <TableCell align="right">{energyConsumption[energyClass]} кВтч</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                    {calculateYearlyCost(energyClass)} PLN
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      fontWeight: 'bold',
                      color: savings > 0 ? '#2e7d32' : '#666',
                    }}
                  >
                    {savings > 0 ? '+' : ''}
                    {calculateSavings(energyClass)} PLN
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      fontWeight: 'bold',
                      color: savings > 0 ? '#2e7d32' : '#666',
                    }}
                  >
                    {savings > 0 ? '+' : ''}
                    {calculateSavings10Years(energyClass)} PLN
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      fontWeight: 'bold',
                      color: savings > 0 ? '#2e7d32' : '#666',
                    }}
                  >
                    {calculateConsumptionDifference(energyClass)}%
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <Card sx={{ backgroundColor: '#fff3e0' }}>
        <CardContent>
          <Typography variant="h6" gutterBottom sx={{ color: '#e65100' }}>
            📊 Ключевые выводы:
          </Typography>
          <Typography variant="body1" paragraph>
            • <strong>Холодильник класса A</strong> экономит до{' '}
            <strong>{calculateSavings('A')} PLN в год</strong> по сравнению с классом F
          </Typography>
          <Typography variant="body1" paragraph>
            • За 10 лет разница между классом A и F составит{' '}
            <strong>{calculateSavings10Years('A')} PLN</strong>
          </Typography>
          <Typography variant="body1" paragraph>
            • Холодильник класса A потребляет на <strong>{calculateConsumptionDifference('A')}%</strong> меньше
            электроэнергии, чем класс F
          </Typography>
          <Typography variant="body2" sx={{ marginTop: 2, color: '#666', fontStyle: 'italic' }}>
            💡 Совет: При покупке нового холодильника выбирайте класс A или B. Хотя они могут стоить дороже при
            покупке, экономия на электроэнергии окупит разницу в течение нескольких лет.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default RefrigeratorCalculator;
