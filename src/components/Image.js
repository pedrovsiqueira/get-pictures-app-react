import React, { useState, useCallback } from "react";

const Image = ({ className, img }) => {
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
          <i className="ri-heart-line favorite"></i>
          <i className="ri-add-circle-line cart"></i>
        </>
      )}
    </div>
  );
};

export default Image;
