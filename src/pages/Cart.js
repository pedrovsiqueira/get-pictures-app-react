import React, { useContext } from "react";
import { Context } from "../Context";
import CartItem from "../components/CartItem";

function Cart() {
  const { cartItems, calculateTotalCost, placeOrder, isOrdered } = useContext(
    Context
  );

  const cartItemElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));

  const textButton = isOrdered ? "Ordering..." : "Place Order";

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">Total: {calculateTotalCost()}</p>
      <div className="order-button">
        {cartItems.length > 0 ? (
          <button onClick={() => placeOrder()}>{textButton}</button>
        ) : (
          <p>You have no items in your cart.</p>
        )}
      </div>
    </main>
  );
}

export default Cart;
