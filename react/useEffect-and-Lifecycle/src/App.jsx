import React from "react";
import Clock from "./Components/Clock.jsx";
import PostsList from "./Components/PostsList/PostsList.jsx";

function App() {
  return (
    <div className="main-container">
      <div className="clock-container">
        <h1>Clock example</h1>
        <Clock />
      </div>

      <div className="clock-container">
        <h1>Posts example</h1>
        <PostsList />
      </div>
    </div>
  );
}

export default App;
