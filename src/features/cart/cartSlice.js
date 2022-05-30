import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import cartItems from "../../cartItems";

const URL = 'https://course-api.com/react-useReducer-cart-project'

//* create initialState

const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
    isLoading: true,
};

//* createAsyncThunk

export const getCartItems = createAsyncThunk('cart/getCartItems', () => {
    return fetch(URL).then((res) => res.json()).catch((err) => console.log(err))
})

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
    },
    extraReducers: {
        [getCartItems.pending]:(state) => {
            state.isLoading = true
        },
        [getCartItems.fulfilled] : (state, action) => {
            state.isLoading = false;
            state.cartItems = action.payload;
        },
        [getCartItems.rejected]: (state) => {
            state.isLoading = false;
        }
    }
});

export const {clearCart,removeItem, increaseItem, decreaseItem,calcTotals} = cartSlice.actions;

export default cartSlice.reducer