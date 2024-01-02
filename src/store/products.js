import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: "1",
      title: "First Book",
      price: 8,
      description: "This is a first book - amazing!",
    },
    {
      id: "2",
      title: "Second Book",
      price: 12,
      description: "This is a second book - amazing!",
    },
  ],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct(state, action) {
      const id = Math.random();
      const product = action.payload;
      product.id = id;
      state.products.push(product);
    },
  },
});

export const productActions = productSlice.actions;

export default productSlice.reducer;
