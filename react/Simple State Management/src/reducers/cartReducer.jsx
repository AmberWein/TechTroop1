export const initialState = {
  items: [],
  total: 0,
  itemCount: 0
};

export default function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const newItem = { ...action.data, id: Date.now() };
      return {
        ...state,
        items: [newItem, ...state.items],
        total: state.total + newItem.price,
        itemCount: state.itemCount + 1
      };
    }
    case "REMOVE_ITEM": {
      const itemToRemove = state.items.find(item => item.id === action.data);
      if (!itemToRemove) return state; // item not found, return current state
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.data),
        total: state.total - itemToRemove.price,
        itemCount: state.itemCount - 1
      };
    }
    case "CLEAR_CART": {
      return initialState;
    }
    default:
      return state;
  }
}