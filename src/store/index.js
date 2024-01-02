import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./products";
import cartReducer from "./cart";
import uiReducer from "./ui";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    ui: uiReducer,
  },
});

export default store;
