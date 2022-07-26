import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		cart: [],
	},
	reducers: {
		addToCart: (state, action) => {
			state.cart = [{ ...action.payload, quantity: 1 }, ...state.cart];
		},
		addItemQuantity: (state, action) => {
			const newCart = state.cart.map((item) => {
				if (item.id === action.payload) item.quantity++;
				return item;
			});
			state.cart = newCart;
		},
		minusItemQuantity: (state, action) => {
			const newCart = state.cart.map((item) => {
				if (item.id === action.payload) item.quantity--;
				return item;
			});
			state.cart = newCart;
		},
		removeFromCart: (state, action) => {
			const newCart = state.cart.filter((item) => item.id !== action.payload);
			state.cart = newCart;
		},
		clearCart: (state) => {
			state.cart = [];
		},
		
	},
});

export const {
	addToCart,
	addItemQuantity,
	minusItemQuantity,
	removeFromCart,
	clearCart,
	addToFavorite,
	removeFromFavorite,
} = cartSlice.actions;

export default cartSlice.reducer;