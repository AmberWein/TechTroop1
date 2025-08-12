
import { Routes, Route } from "react-router-dom";
import Entities from "./Components/Entities.jsx";
import Description from "./Components/Description.jsx";
import "./App.css";

function App({ getCategoryData }) {
  return (
    <Routes>
      <Route path="/wiki/:category" element={<Entities getCategoryData={getCategoryData} />} />
      <Route path="/wiki/:category/:item" element={<Description getCategoryData={getCategoryData} />} />
    </Routes>
  );
}

export default App;