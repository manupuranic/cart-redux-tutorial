import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartContent = cartItems.map((prod) => (
    <CartItem
      key={prod.id}
      item={{
        id: prod.id,
        title: prod.title,
        quantity: prod.qty,
        price: prod.price,
        total: prod.price * prod.qty,
      }}
    />
  ));

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {/* <CartItem
          item={{ title: 'Test Item', quantity: 3, total: 18, price: 6 }}
        /> */}
        {cartContent}
      </ul>
    </Card>
  );
};

export default Cart;
