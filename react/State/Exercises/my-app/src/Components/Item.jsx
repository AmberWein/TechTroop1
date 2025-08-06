import React from 'react';

function Item({ item }) {
  return (
    <div>
      {item.item}: ${item.price}
    </div>
  );
}

export default Item;