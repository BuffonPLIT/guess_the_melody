import './App.css';
import Game from './content/Game';
import LeftDrawer from './content/LeftDrower';
import RefrigeratorCalculator from './content/RefrigeratorCalculator';
import { useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material';

function App() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <div className="App">
      <LeftDrawer />
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={activeTab} onChange={handleTabChange} centered>
          <Tab label="🎵 Музыкальная игра" />
          <Tab label="🧊 Калькулятор холодильников" />
        </Tabs>
      </Box>
      {activeTab === 0 && <Game />}
      {activeTab === 1 && <RefrigeratorCalculator />}
    </div>
  );
}

export default App;
