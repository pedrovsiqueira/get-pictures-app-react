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

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverLeave}
    >
      <img src={img.url} alt="Imgs" className="image-grid" />
      {isHovered && (
        <>
          <i
            onClick={() => toggleFavorite(img.id)}
            className="ri-heart-line favorite"
          ></i>
          <i className="ri-add-circle-line cart"></i>
        </>
      )}
    </div>
  );
};

export default Image;
