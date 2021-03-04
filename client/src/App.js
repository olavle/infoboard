import logo from './logo.svg';
import './App.css';
import CurrentWeather from './components/CurrentWeather'
require('dotenv').config()

function App() {
  return (
    <div className="App">
      <CurrentWeather />
    </div>
  );
}

export default App;
