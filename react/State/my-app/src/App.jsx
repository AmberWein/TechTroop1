import SpotCheck1 from "./Components/SpotCheck1";
import Company from "./Components/Company";
import Calendar from "./Components/Calendar";
import Register from "./Components/Register";
import Hot from "./Components/Hot";
import Cold from "./Components/Cold";

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

  const [temperature, setTemperature] = useState("hot");

  const toggleTemperature = () => {
    setTemperature((prev) => (prev === "hot" ? "cold" : "hot"));
  };

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
          <Company
            key={company.name}
            name={company.name}
            revenue={company.revenue}
          />
        ))}
      </div>

      <div className="spot-check-3">
        <h1>Spot Check 3</h1>
        <p>Display shared state data in child components using props.</p>
        <Calendar reservations={reservations} />
        <Register reservations={reservations} />
      </div>

      <div className="spot-check-4">
        <h1>Spot Check 4</h1>
        <p>
          Toggles between two components based on state using a button click.
        </p>
        {temperature === "hot" ? <Hot /> : <Cold />}
        <button onClick={toggleTemperature}>Change temperature!</button>
      </div>
    </div>
  );
}

export default App;
