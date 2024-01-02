import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { cartActions } from "../../store/cart";

const CartButton = (props) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalQty = cartItems.reduce((total, currItem) => {
    return total + currItem.qty;
  }, 0);
  const dispatch = useDispatch();
  const cartButtonHandler = () => {
    dispatch(cartActions.toggleCart());
  };

  return (
    <button onClick={cartButtonHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQty}</span>
    </button>
  );
};

export default CartButton;
