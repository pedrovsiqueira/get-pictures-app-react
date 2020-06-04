import React, { useContext } from "react";
import { Context } from "../Context";
import PropTypes from 'prop-types'
import useHover from '../hooks/useHover'

const CartItem = ({ item }) => {
  const { handleRemoveFromCart } = useContext(Context);
  const [isHovered, ref] = useHover()

  const trashClassName = isHovered
    ? "ri-delete-bin-fill"
    : "ri-delete-bin-line";

  return (
    <div className="cart-item">
      <i
        ref={ref}
        onClick={() => handleRemoveFromCart(item)}
        className={trashClassName}
      ></i>
      <img src={item.url} alt="img" width="130px" />
      <p>$5.99</p>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};

export default CartItem;
