import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: ["arvind", "apple", "happy happy"],
  },
  reducers: {
    //the action and the reducer function linked with it
    addItems: (state, action) => {
      state.cartItems.push(action.payload);
    },
  },
});

export const { addItems } = cartSlice.actions;
export default cartSlice.reducer;
