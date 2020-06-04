import React, { useContext, useState } from "react";
import { Context } from "../Context";

const CartItem = ({ item }) => {
  const { handleRemoveFromCart } = useContext(Context);

  const [isHoveredOnTrash, setIsHoveredOnTrash] = useState(false);

  const handleHoverEnter = () => {
    setIsHoveredOnTrash(true);
  };

  const handleHoverLeave = () => {
    setIsHoveredOnTrash(false);
  };

  const trashClassName = isHoveredOnTrash
    ? "ri-delete-bin-fill"
    : "ri-delete-bin-line";

  return (
    <div className="cart-item">
      <i
        onMouseEnter={handleHoverEnter}
        onMouseLeave={handleHoverLeave}
        onClick={() => handleRemoveFromCart(item)}
        className={trashClassName}
      ></i>
      <img src={item.url} alt="img" width="130px" />
      <p>$5.99</p>
    </div>
  );
};

export default CartItem;
