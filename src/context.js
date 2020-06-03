import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
const Context = createContext({});

const ContextProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);

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
    <Context.Provider value={{ photos, toggleFavorite }}>
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
