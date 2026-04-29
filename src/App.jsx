
import DataView from './components/DataView'; 
import Navbar from './components/Navbar';     
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 className="header">
        Earn More, Pay Less? Average Housing Costs and Incomes by NYC Borough
      </h1>

      <DataView />
    </div>
  );
}

export default App;