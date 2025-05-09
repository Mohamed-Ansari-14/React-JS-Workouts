import { createSlice } from "@reduxjs/toolkit";

let dataFromWeb = JSON.parse(localStorage.getItem("cart"));

const cartSlice = createSlice({
  name: "cart",
  initialState: dataFromWeb, //here have data from state(Below)
  reducers: {
    //Actions
    addItem(state, action) {
      state.push(action.payload);

      localStorage.setItem("cart", JSON.stringify([...state]));
    },
    removeItem(state, action) {
      let newProducts = state.filter(
        (cartProduct) => cartProduct.id !== action.payload
      );

      localStorage.setItem("cart", JSON.stringify([...newProducts]));

      return newProducts;
    },
  },
});

export default cartSlice.reducer;

export let { addItem, removeItem } = cartSlice.actions;
