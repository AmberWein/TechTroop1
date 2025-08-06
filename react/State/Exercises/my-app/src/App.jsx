import { useState } from "react";
import Hudini from "./Components/Hudini";
import Landing from "./Components/Landing";
import Home from "./Components/Home";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const [state, setState] = useState({
    user: "Robyn",
    store: [
      { item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false },
      { item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false },
      {
        item: "Surround Sound Pelican",
        price: 3099,
        discount: 0.05,
        hottest: true,
      },
    ],
    shouldDiscount: false,
    currentPage: "Landing",
  });

  return (
    <div>
      <div className="ex-1">
        <Hudini />
      </div>

      <div className="ex-2">
      <Landing user={state.user} store={state.store} />
      <Home store={state.store} />
    </div>
    </div>
  );
}

export default App;
