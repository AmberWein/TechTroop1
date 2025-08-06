import './App.css'
import SpotCheck1 from './Components/SpotCheck1';
import { useState } from "react";
import Company from './Components/Company';

function App() {
  let companiesData = [{ name: "Tesla", revenue: 140 },
      { name: "Microsoft", revenue: 300 },
      { name: "Google", revenue: 600 }];
    
  let [companies, setCompanies] = useState(companiesData);

  return (
    <div className="main-container">
      <div className="spot-check-1">
        <h1>Spot Check 1</h1>
        <p>Hover over the button below to see the console log.</p>
        <SpotCheck1 />
      </div>

      <div className="spot-check-2">
        <h1>Spot Check 2</h1>
        <p>Render a Company component for each of the above items using state.</p>
        {companies.map(company => <Company name={company.name} revenue={company.revenue}></Company>)}
      </div>
    </div>
  );
}

export default App
