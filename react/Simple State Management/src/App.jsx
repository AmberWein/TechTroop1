import React, { useReducer } from "react";
import './App.css';
import cartReducer, { initialState } from './reducers/cartReducer';

export default function App() {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <div>
      <h1>Shopping cart</h1>

      <button
        onClick={() =>
          dispatch({ type: "ADD_ITEM", data: { name: `Item ${state.items.length + 1}`, price: 10 } })
        }
      >
        Add item
      </button>

      <button onClick={() => dispatch({ type: "CLEAR_CART" })}>
        Clear cart
      </button>

      <h2>
        ({state.itemCount} items) - total: ${state.total}
      </h2>

      <ul>
        {state.items.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}{" "}
            <button onClick={() => dispatch({ type: "REMOVE_ITEM", data: item.id })}>
              Remove
            </button>
          </li>
        ))}
      </ul>

      <h3>State:</h3>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}
