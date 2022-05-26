import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cartSlice";
import modalSlice from "../features/modal/modalSlice";

//* create store
//* create cartSlice

export const store = configureStore({
    reducer: {cart:cartSlice, modal : modalSlice}
}); 