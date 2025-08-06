import React from 'react';
import Item from './Item.jsx';

function Home({ store, shouldDiscount  }) {
  return (
    <div>
      <h4>Store</h4>
      {store.map(product => (
        <Item key={product.item} item={product} shouldDiscount={shouldDiscount}/>
      ))}
    </div>
  );
}

export default Home;