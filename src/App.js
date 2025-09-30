import './App.css';
import Game from './content/Game';
import LeftDrawer from './content/LeftDrower';

function App() {
  return (
    <div className="App">
      <LeftDrawer />
      <Game></Game>
    </div>
  );
}

export default App;
