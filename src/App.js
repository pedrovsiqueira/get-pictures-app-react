import React from "react";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Photos from "./pages/Photos";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <h1>Home Page</h1>

      <Switch>
        <Route path="/" exact>
          <Photos />
        </Route>

        <Route path="/cart">
          <Cart />
        </Route>
        
      </Switch>
    </div>
  );
}

export default App;
