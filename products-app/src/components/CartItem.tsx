import { useDispatch } from "react-redux";
import "./Cart.css";
import { cartActions } from "./../store/cart-slice";
import type { TProduct } from "./../store/cart-slice";

const CartItem = ({ name, quantity, price, id, total }: TProduct & { total: number }) => {
  const dispatch = useDispatch();

  const removeHandler = () => {
    dispatch(cartActions.remove(id));
  };

  const addHandler = () => {
    dispatch(cartActions.add({ id, name, price }));
  };

  return (
    <div className="cartItem">
      <h2>{name}</h2>
      <p>${price} /-</p>
      <p>x{quantity}</p>
      <article>Total ${total}</article>
      <button className="cart-actions" onClick={removeHandler}>
        -
      </button>
      <button className="cart-actions" onClick={addHandler}>
        +
      </button>
    </div>
  );
};

export default CartItem;
