import React, { useContext } from "react";
import { Context } from "../Context";
import PropTypes from "prop-types";
import useHover from "../hooks/useHover";

const Image = ({ className, img }) => {
  const [isHovered, ref] = useHover();

  Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      isFavorite: PropTypes.bool,
    }),
  };

  const {
    toggleFavorite,
    handleAddToCart,
    cartItems,
    handleRemoveFromCart,
  } = useContext(Context);

  const heartIcon = () => {
    if (img.isFavorite) {
      return (
        <i
          onClick={() => toggleFavorite(img.id)}
          className="ri-heart-fill favorite"
        ></i>
      );
    } else if (isHovered) {
      return (
        <i
          onClick={() => toggleFavorite(img.id)}
          className="ri-heart-line favorite"
        ></i>
      );
    }
  };

  const cartIcon = () => {
    const alreadyInCart = cartItems.some((item) => item.id === img.id);
    if (alreadyInCart) {
      return (
        <i
          onClick={() => handleRemoveFromCart(img)}
          className="ri-add-circle-fill cart"
        ></i>
      );
    } else if (isHovered) {
      return (
        <i
          onClick={() => handleAddToCart(img)}
          className="ri-add-circle-line cart"
        ></i>
      );
    }
  };

  return (
    <div ref={ref} className={`${className} image-container`}>
      <img src={img.url} alt="Imgs" className="image-grid" />
      {heartIcon()}
      {cartIcon()}
    </div>
  );
};

export default Image;
