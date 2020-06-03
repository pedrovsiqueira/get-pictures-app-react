import React from "react";

const Image = ({ className, img }) => {
  return (
    <div className={`${className} image-container`}>
      <img src={img.url} alt="Imgs" className="image-grid" />
    </div>
  );
};

export default Image;
