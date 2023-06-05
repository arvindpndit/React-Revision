import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    //the action and the reducer function linked with it
    addItems: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeItems: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addItems, removeItems } = cartSlice.actions;
export default cartSlice.reducer;
