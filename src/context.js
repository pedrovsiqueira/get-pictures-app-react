import React, { createContext } from "react";
const Context = createContext();

const ContextProvider = (props) => {
  return (
    <Context.Provider value=''>
      {props.children}
    </Context.Provider>
  )
}

export {ContextProvider, Context};
