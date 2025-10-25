import './App.css';
import Game from './content/Game';
import LeftDrawer from './content/LeftDrower';
import RefrigeratorCalculator from './content/RefrigeratorCalculator';

function App() {
  return (
    <div className="App">
      <LeftDrawer />
      <Game></Game>
      <RefrigeratorCalculator />
    </div>
  );
}

export default App;
