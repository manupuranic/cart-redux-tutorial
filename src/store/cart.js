import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showCart: false,
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const existingIndex = state.cartItems.findIndex(
        (prod) => prod.id === item.id
      );
      if (existingIndex >= 0) {
        state.cartItems[existingIndex].qty += 1;
      } else {
        item.qty = 1;
        state.cartItems.push(item);
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingIndex = state.cartItems.findIndex((prod) => prod.id === id);
      if (state.cartItems[existingIndex].qty > 1) {
        state.cartItems[existingIndex].qty -= 1;
      } else {
        const updatedCart = state.cartItems.filter((prod) => prod.id !== id);
        state.cartItems = updatedCart;
      }
    },
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
    openCart(state) {
      state.showCart = true;
    },
    closeCart(state) {
      state.showCart = false;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
