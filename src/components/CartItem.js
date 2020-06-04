import React from "react";

const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <i className="ri-delete-bin-line"></i>
      <img src={item.url} alt="img" width="130px" />
      <p>$5.99</p>
    </div>
  );
};

export default CartItem;
