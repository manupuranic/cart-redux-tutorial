import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { Fragment, useCallback, useEffect } from "react";
import Notification from "./components/UI/Notification";
import { uiActions } from "./store/ui";

let isInitial = true;

function App() {
  const showCart = useSelector((state) => state.ui.showCart);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartItems);
  const notification = useSelector((state) => state.ui.notification);

  const updateCartAPI = useCallback(async () => {
    try {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "sending...",
          message: "updating cart Data",
        })
      );
      const response = await fetch(
        "https://cart-redux-20f63-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (response.ok) {
        dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success!!",
            message: "Sent cart Data successfully",
          })
        );
      } else {
        throw new Error(data.error.message);
      }
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "sending cart data failed!",
        })
      );
    }
  }, [cart, dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    updateCartAPI();
  }, [updateCartAPI]);

  return (
    <Fragment>
      {notification && (
        <Notification
          title={notification.title}
          status={notification.status}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
