import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
const Context = createContext({});

const ContextProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
      )
      .then((resp) => setPhotos(resp.data))
      .catch((err) => console.log(err));
  }, []);

  return <Context.Provider value={{ photos }}>{children}</Context.Provider>;
};

export { ContextProvider, Context };
