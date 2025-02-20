import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  isCartOpen: false
};

export const cartSlice = createSlice({
  name: "cart",
  initialState, 
  reducers: {
    addToCart: (state, action) => {
      state.products = [...state.products, action.payload.item]
    },
    //  const item = state.products.find((item) => item.id === action.payload.id)
      
    //  if (item) {
    //     item.quantity += action.payload.quantity
    //  } else {
    //     state.products.push(action.payload)
    //  }
    // },

    removeItem : (state,action) => {
        state.products= state.products.filter(item => item.id !== action.payload)
    },
    resetCart : (state) => [
        state.products = []
    ],
    increaseQuantitly: (state,quantity,action) => {
      state.products = state.products.map((item) => {
        if(item.id !== action.payload.id) {
          item.quantity++
        } return item;
      });
    },
    decreaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id && item.count > 1) {
          item.count--;
        }
        return item;
      });
    },
    setIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },

   
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeItem, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
