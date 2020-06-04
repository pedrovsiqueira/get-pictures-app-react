import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
const Context = createContext({});

const ContextProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isOrdered, setIsOrdered] = useState(false)

  const handleAddToCart = (img) => {
    setCartItems((prevState) => [...prevState, img]);
  };

  const handleRemoveFromCart = (img) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== img.id));
  };

  const calculateTotalCost = () => {
    return (cartItems.length * 5.99).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const toggleFavorite = (id) => {
    const updatedPhotosArr = photos.map((photo) => {
      if (photo.id === id) {
        return { ...photo, isFavorite: !photo.isFavorite };
      }
      return photo;
    });
    setPhotos(updatedPhotosArr);
  };

  const placeOrder = () => {
    setIsOrdered(true)

    setTimeout(() => {
      console.log('Order placed!')
      setCartItems([])
      setIsOrdered(false)
    }, 3000)
  }

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
        calculateTotalCost,
        placeOrder,
        isOrdered,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
