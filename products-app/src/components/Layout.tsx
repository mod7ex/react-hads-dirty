import "./Layout.css";
import React from "react";
import Header from "./Header";
import Products from "./Products";
import CartItems from "./CartItems";
import { useAppSelector } from "../store";

const Layout = () => {
  let items = useAppSelector((s) => s.cart.items);
  const show_cart = useAppSelector((s) => s.cart.show_cart);

  return (
    <React.Fragment>
      <div className="layout">
        <Header />

        <Products />

        {show_cart && <CartItems />}

        <div className="total-price">
          <h3>Total: ${items.reduce((prev, { quantity, price }) => prev + quantity * price, 0)}</h3>
          <button className="orderBtn">Place Order</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
