
import { Routes, Route } from "react-router-dom";
import React from "react";
import CategoryList from "./Components/CategoryList.jsx";
import Entities from "./Components/Entities.jsx";
import "./App.css";

function App({ getCategoryData }) {
  return (
    <Routes>
      {/* <Route path="/" element={<CategoryList />} /> */}
      <Route path="/wiki/:category" element={<Entities getCategoryData={getCategoryData} />} />
    </Routes>
  );
}

export default App;