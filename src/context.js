import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
const Context = createContext({});

const ContextProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (img) => {
    setCartItems((prevState) => [...prevState, img]);
  };

  const handleRemoveFromCart = (img) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== img.id));
  };
  console.log(cartItems);

  const toggleFavorite = (id) => {
    const updatedPhotosArr = photos.map((photo) => {
      if (photo.id === id) {
        return { ...photo, isFavorite: !photo.isFavorite };
      }
      return photo;
    });
    setPhotos(updatedPhotosArr);
  };

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
      )
      .then((resp) => setPhotos(resp.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Context.Provider
      value={{
        photos,
        toggleFavorite,
        handleAddToCart,
        cartItems,
        handleRemoveFromCart,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
