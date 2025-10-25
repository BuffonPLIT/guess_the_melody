// Данные о классах энергоэффективности холодильников
export const REFRIGERATOR_CLASSES = {
  A: {
    name: 'A+++',
    annualConsumption: 125, // кВт⋅ч/год
    color: '#00A651',
    description: 'Наиболее энергоэффективный'
  },
  B: {
    name: 'A++',
    annualConsumption: 150, // кВт⋅ч/год
    color: '#7CB342',
    description: 'Очень энергоэффективный'
  },
  C: {
    name: 'A+',
    annualConsumption: 188, // кВт⋅ч/год
    color: '#FFC107',
    description: 'Энергоэффективный'
  },
  D: {
    name: 'A',
    annualConsumption: 233, // кВт⋅ч/год
    color: '#FF9800',
    description: 'Средняя энергоэффективность'
  },
  E: {
    name: 'B',
    annualConsumption: 290, // кВт⋅ч/год
    color: '#FF5722',
    description: 'Низкая энергоэффективность'
  },
  F: {
    name: 'C',
    annualConsumption: 350, // кВт⋅ч/год
    color: '#F44336',
    description: 'Наименее энергоэффективный'
  }
};

// Тарифы на электроэнергию в Польше (2024)
export const ELECTRICITY_RATES_POLAND = {
  // Средний тариф для домохозяйств в Польше
  averageRate: 0.75, // PLN за кВт⋅ч
  
  // Детализированные тарифы по регионам
  regions: {
    warsaw: {
      name: 'Варшава',
      rate: 0.78 // PLN за кВт⋅ч
    },
    krakow: {
      name: 'Краков',
      rate: 0.76 // PLN за кВт⋅ч
    },
    gdansk: {
      name: 'Гданьск',
      rate: 0.74 // PLN за кВт⋅ч
    },
    wroclaw: {
      name: 'Вроцлав',
      rate: 0.75 // PLN за кВт⋅ч
    },
    poznan: {
      name: 'Познань',
      rate: 0.73 // PLN за кВт⋅ч
    }
  }
};

// Дополнительные факторы для расчета
export const CALCULATION_FACTORS = {
  // Средний срок службы холодильника
  averageLifespan: 15, // лет
  
  // Инфляция электроэнергии в год
  electricityInflationRate: 0.03, // 3% в год
  
  // Дополнительные расходы (обслуживание, ремонт)
  maintenanceCostFactor: 0.1 // 10% от стоимости электроэнергии
};