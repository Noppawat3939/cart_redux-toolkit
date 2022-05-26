import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

//* create initialState

const initialState = {
    cartItems: cartItems,
    amount: 0,
    total: 0,
    isLoading: true,
};

//* createSlice

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = []
        },
        removeItem: (state,action) => {
            const itemID = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemID)
        },
        increaseItem: (state, {payload}) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id);
            cartItem.amount = cartItem.amount+1
        },
        decreaseItem : (state, {payload}) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id);
            // cartItem.amount > 0 ? cartItem.amount = cartItem.amount -1 : cartItem.amount;
            cartItem.amount = cartItem.amount -1
        },
        calcTotals: (state) => {
            let amount = 0;
            let total = 0;

            state.cartItems.forEach((item) => {
                amount += item.amount;
                total += item.amount * item.price
            })
            state.amount = amount;
            state.total = total.toFixed(2);
        }
    }
});

export const {clearCart,removeItem, increaseItem, decreaseItem,calcTotals} = cartSlice.actions;

export default cartSlice.reducer