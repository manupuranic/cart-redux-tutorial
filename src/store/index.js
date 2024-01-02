import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./products";
import cartReducer from "./cart";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
  },
});

export default store;
