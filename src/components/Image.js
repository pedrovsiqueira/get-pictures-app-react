import React, { useState, useCallback, useContext } from "react";
import { Context } from "../Context";

const Image = ({ className, img }) => {
  const { toggleFavorite } = useContext(Context);

  const [isHovered, setIsHovered] = useState(false);

  const handleHoverEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleHoverLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  const heartIcon = isHovered && !img.isFavorite && (
    <i
      onClick={() => toggleFavorite(img.id)}
      className="ri-heart-line favorite"
    ></i>
  );

  const heartIconFilled = isHovered && img.isFavorite && (
    <i
      onClick={() => toggleFavorite(img.id)}
      className="ri-heart-fill favorite"
    ></i>
  );

  const cartIcon = isHovered && <i className="ri-add-circle-line cart"></i>;

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverLeave}
    >
      <img src={img.url} alt="Imgs" className="image-grid" />
      {heartIcon}
      {cartIcon}
      {heartIconFilled}
    </div>
  );
};

export default Image;
