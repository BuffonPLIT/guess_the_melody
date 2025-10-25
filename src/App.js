import './App.css';
import React, { useState } from 'react';
import Game from './content/Game';
import LeftDrawer from './content/LeftDrower';
import RefrigeratorCalculator from './content/RefrigeratorCalculator';
import { Tabs, Tab, Box } from '@mui/material';

function App() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <div className="App">
      <LeftDrawer />
      <Box sx={{ borderBottom: 1, borderColor: 'divider', marginTop: 2 }}>
        <Tabs value={activeTab} onChange={handleTabChange} centered>
          <Tab label="Игра" />
          <Tab label="Калькулятор холодильников" />
        </Tabs>
      </Box>
      <Box sx={{ padding: 2 }}>
        {activeTab === 0 && <Game />}
        {activeTab === 1 && <RefrigeratorCalculator />}
      </Box>
    </div>
  );
}

export default App;
