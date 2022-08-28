import React from "react";
import { useAppDispatch } from "../store";
import Cart from "./Cart";
import "./Header.css";
import { authActions } from "../store/auth-slice";

const Header = () => {
  const dispatch = useAppDispatch();

  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <h2 className="header-h2" style={{ fontFamily: "monospace", fontSize: "30px" }}>
              Redux Shopping App
            </h2>
          </li>

          <li>
            <Cart />
          </li>

          <li>
            <button onClick={() => dispatch(authActions.logOut())} className="logout-btn">
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
