import { useReducer } from "react";

const initialState = {
  items: [],
  total: 0,
  itemCount: 0
};

function ShoppingCart() {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <div>
      <h2>
        Shopping cart ({state.itemCount} items) - total: ${state.total}
      </h2>

      <button
        onClick={() =>
          dispatch({
            type: "ADD_ITEM",
            data: { name: "Laptop", price: 999 }
          })
        }
      >
        Add laptop
      </button>

      <button onClick={() => dispatch({ type: "CLEAR_CART" })}>
        Clear cart
      </button>

      <ul>
        {state.items.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}{" "}
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", data: item.id })
              }
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingCart;