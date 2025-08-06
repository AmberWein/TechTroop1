import React from 'react';
import Item from './Item.jsx';
function Home({ store }) {
  return (
    <div>
        <h4>Store</h4>
      {store.map(product => (
        <Item key={product.item} item={product.item} price={product.price} />
      ))}
    </div>
  );
}

export default Home;