import SpotCheck1 from "./Components/SpotCheck1";
import Company from "./Components/Company";
import Calendar from "./Components/Calendar";
import Register from "./Components/Register";

import { useState } from "react";
import "./App.css";

function App() {
  let companiesData = [
    { name: "Tesla", revenue: 140 },
    { name: "Microsoft", revenue: 300 },
    { name: "Google", revenue: 600 },
  ];

  let [companies, setCompanies] = useState(companiesData);

  const [reservations, setReservations] = useState([
    { day: "Monday", time: 2000, name: "Earl" },
    { day: "Monday", time: 1845, name: "Ella" },
    { day: "Tuesday", time: 1930, name: "Linda" },
    { day: "Wednesday", time: 2015, name: "Anni" },
  ]);

  return (
    <div className="main-container">
      <div className="spot-check-1">
        <h1>Spot Check 1</h1>
        <p>Hover over the button below to see the console log.</p>
        <SpotCheck1 />
      </div>

      <div className="spot-check-2">
        <h1>Spot Check 2</h1>
        <p>
          Render a Company component for each of the above items using state.
        </p>
        {companies.map((company) => (
          <Company name={company.name} revenue={company.revenue}></Company>
        ))}
      </div>

      <div className="spot-check-3">
        <h1>Spot Check 3</h1>
        <p>Display shared state data in child components using props.</p>
        <Calendar reservations={reservations} />
        <Register reservations={reservations} />
      </div>
    </div>
  );
}

export default App;
