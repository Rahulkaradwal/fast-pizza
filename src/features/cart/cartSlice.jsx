import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

// {
//     pizzaId: 12,
//     name: "Mediterranean",
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cart.push(action.payload);
    },
    removeFromCart(state, action) {
      // const itemId = state.cart.find((item) => item.pizzaId === action.payload);

      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseQuantity(state, action) {},
    decreaseQuantity(state, action) {},
  },
});

export const {} = cartSlice.actions;

export default cartSlice.reducer;
