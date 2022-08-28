import { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useAppDispatch, useAppSelector } from "./store";
import Notification from "./components/Notification";
// import { uiActions } from "./store/ui-slice";
import { sendCartData, fetchCart } from "./store/cart-actions";
import { cartActions } from "./store/cart-slice";

let isFirstRender = true;

function App() {
  const dispatch = useAppDispatch();

  const { message, type } = useAppSelector((s) => s.ui.notification);

  const isLoggedIn = useAppSelector((s) => s.auth.isLoggedIn);

  const cart = useAppSelector((s) => s.cart);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }

    if (cart.changed) {
      /*
      const saveInFireBase = async (body: BodyInit | null | undefined) => {
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
  
      saveInFireBase(JSON.stringify(cart));
      */

      dispatch(sendCartData(cart));

      dispatch(cartActions.setChanged());
    }
  }, [cart]);

  return (
    <div className="App">
      <Notification type={type} message={message} />
      {isLoggedIn ? <Layout /> : <Auth />}
    </div>
  );
}

export default App;
