import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: "1",
      title: "Test",
      price: 6,
      description: "This is a first product - amazing!",
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
