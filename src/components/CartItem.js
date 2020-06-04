import React, {useContext} from "react";
import {Context} from '../Context'

const CartItem = ({ item }) => {
  const { handleRemoveFromCart } = useContext(Context);
  
  return (
    <div className="cart-item">
      <i onClick={() => handleRemoveFromCart(item)} className="ri-delete-bin-line"></i>
      <img src={item.url} alt="img" width="130px" />
      <p>$5.99</p>
    </div>
  );
};

export default CartItem;
