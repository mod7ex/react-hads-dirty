import { useAppDispatch, useAppSelector } from "../store";
import { cartActions } from "../store/cart-slice";
import "./Cart.css";

const Cart = () => {
  const items = useAppSelector((s) => s.cart.items);

  const dispatch = useAppDispatch();

  return (
    <div className="cartIcon">
      <h3 onClick={() => dispatch(cartActions.toggle_cart())}>Cart: {items.reduce((prev, { quantity }) => prev + quantity, 0)} Items</h3>
    </div>
  );
};

export default Cart;
