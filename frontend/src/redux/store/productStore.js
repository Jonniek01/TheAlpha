import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../Slices/productSlice";
import detailsReducers from "../Slices/detailsReducers";
import CartReducer from "../Slices/cartReducer";

const store = configureStore({
    reducer: {
        products: productSlice ,
        product :detailsReducers,
        cart: CartReducer
    },
});

export default store;