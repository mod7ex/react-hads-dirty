import { AppDispatch } from "./index";
import { uiActions } from "./ui-slice";
import { cartActions, type CartState } from "./cart-slice";

export const sendCartData = (cart: CartState) => {
  return (dispatch: AppDispatch) => {
    const _fn = async (body: BodyInit | null | undefined) => {
      dispatch(uiActions.notify({ open: true, message: "sending data...", type: "warning" }));
      try {
        const res = await fetch("https://redux-products-5643e-default-rtdb.europe-west1.firebasedatabase.app/cart.json", { method: "PUT", body });
        const data = await res.json();
        console.log(data);
        dispatch(uiActions.notify({ open: true, message: "Data saved successfully", type: "success" }));
      } catch (e: unknown) {
        console.log(e);
        dispatch(uiActions.notify({ open: true, message: "Faild to save data", type: "error" }));
      }
    };

    _fn(JSON.stringify(cart.items));
  };
};

export const fetchCart = () => {
  return (dispatch: AppDispatch) => {
    const _fn = async () => {
      try {
        const res = await fetch("https://redux-products-5643e-default-rtdb.europe-west1.firebasedatabase.app/cart.json", { method: "GET" });
        const data: CartState["items"] = await res.json();
        console.log(data);
        dispatch(cartActions.replace(data ?? []));
      } catch (e: unknown) {
        console.log(e);
        dispatch(uiActions.notify({ open: true, message: "Faild to fetch data", type: "error" }));
      }
    };

    _fn();
  };
};
