import { useState, useEffect, useRef } from "react";

const useHover = () => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);

  const handleHoverEnter = () => {
    setIsHovered(true);
  };

  const handleHoverLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    ref.current.addEventListener("mouseenter", handleHoverEnter);
    ref.current.addEventListener("mouseleave", handleHoverLeave);

    return () => {
      ref.current.removeEventListener("mouseenter", handleHoverEnter);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      ref.current.removeEventListener("mouseleave", handleHoverLeave);
    };
  }, []);

  return [isHovered, ref];
};

export default useHover;
