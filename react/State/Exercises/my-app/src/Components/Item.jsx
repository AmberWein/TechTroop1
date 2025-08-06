import React from "react";

function Item({ item, shouldDiscount }) {
  const finalPrice = shouldDiscount
    ? item.price * (1 - item.discount)
    : item.price;

  return (
    <div>
      {item.item}: ${finalPrice.toFixed(2)}
    </div>
  );
}

export default Item;
