import React from "react";
import { useSelector } from "react-redux";

function ReduxCart() {
  const cart = useSelector((state) => state.items);

  const cartItems = Object.values(cart);

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${item.price * item.quantity}</p>
            {console.log(item)}
          </div>
        ))
      )}
    </div>
  );
}

export default ReduxCart;
