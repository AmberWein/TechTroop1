import { useState } from "react";
import Hudini from "./Components/Hudini";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="ex-1">
        <Hudini />
      </div>
    </div>
  );
}

export default App;
