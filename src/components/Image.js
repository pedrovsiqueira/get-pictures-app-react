import React, { useState, useCallback, useContext } from "react";
import { Context } from "../Context";
import PropTypes from "prop-types";

const Image = ({ className, img }) => {
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

  const [isHovered, setIsHovered] = useState(false);

  const handleHoverEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleHoverLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

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
    <div
      className={`${className} image-container`}
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverLeave}
    >
      <img src={img.url} alt="Imgs" className="image-grid" />
      {heartIcon()}
      {cartIcon()}
    </div>
  );
};

export default Image;
