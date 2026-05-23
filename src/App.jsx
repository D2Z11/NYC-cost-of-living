
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

      <DataView
        borough="Staten Island"
        renterCost="$14,292"
        ownerCost="$28,752"
        renterIncome="$37,882"
        ownerIncome="$94,177"
        message="Cost of living vastly differs for renters and buyers." />

      <DataView
        borough="Queens"
        renterCost="$16,812"
        ownerCost="$29,256"
        renterIncome="$46,549"
        ownerIncome="$80,144"
        message="Housing costs are relatively balanced between renters and owners." />

      <DataView
        borough="Brooklyn"
        renterCost="$15,144"
        ownerCost="$31,908"
        renterIncome="$40,128"
        ownerIncome="$83,737"
        message="Homeowners carry a slightly higher housing burden than renters." />

      <DataView
        borough="Manhattan"
        renterCost="$36,252"
        ownerCost="$18,900"
        renterIncome="$62,173"
        ownerIncome="$142,046"
        message="Renters pay significantly more as a percentage of income than homeowners." />

      <DataView
        borough="Bronx"
        renterCost="$13,176"
        ownerCost="$28,548"
        renterIncome="$29,302"
        ownerIncome="$76,454"
        message="Renters face a higher cost-to-income ratio despite lower absolute costs." />
    </div>
  );
}

export default App;