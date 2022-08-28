import "./Product.css";
import React from "react";
import { cartActions } from "../store/cart-slice";
import { useAppDispatch } from "../store";

type Args = { name: string; id: number; imgURL: string; price: number };

const Product = ({ name, id, imgURL, price }: Args) => {
  const dispatch = useAppDispatch();

  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={() => dispatch(cartActions.add({ name, id, price }))}>Add to cart</button>
    </div>
  );
};

export default Product;
