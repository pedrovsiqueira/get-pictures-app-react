import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";

function Header() {
  const { cartItems } = useContext(Context);

  const cartClassName =
    cartItems.length ? "ri-shopping-cart-fill" : "ri-shopping-cart-line";

  return (
    <header>
      <h2>
        <Link to="/">Pic Some</Link>
      </h2>
      <i className={`${cartClassName} ri-fw ri-2x`}></i>
    </header>
  );
}

export default Header;
