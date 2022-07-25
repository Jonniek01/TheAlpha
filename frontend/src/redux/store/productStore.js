import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../Slices/productSlice";
import detailsReducers from "../Slices/detailsReducers";

const store = configureStore({
    reducer: {
        products: productSlice ,
        product :detailsReducers,
    },
});

export default store;