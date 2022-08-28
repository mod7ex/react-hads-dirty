import "./Cart.css";
import React from "react";
import CartItem from "./CartItem";
import { useAppSelector } from "../store";

const CartItems = () => {
  const items = useAppSelector((s) => s.cart.items);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {items.map(({ id, name, price, quantity }) => (
          <li key={id}>
            <CartItem id={id} price={price} name={name} quantity={quantity} total={items.reduce((prev, { quantity, price }) => prev + quantity * price, 0)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItems;
