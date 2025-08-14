function ShoppingCart() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [itemCount, setItemCount] = useState(0);

  const addItem = (product) => {
    const newItems = [...items, { ...product, id: Date.now() }];
    setItems(newItems);
    setTotal(total + product.price);
    setItemCount(itemCount + 1);
  };

  const removeItem = (id) => {
    const newItems = items.filter(item => item.id !== id);
    const removedItem = items.find(item => item.id === id);
    setItems(newItems);
    setTotal(total - removedItem.price);
    setItemCount(itemCount - 1);
  };

  return (
    <div>
      <h2>Shopping Cart ({itemCount} items) - Total: ${total}</h2>
      {/* Render items */}
    </div>
  );
}