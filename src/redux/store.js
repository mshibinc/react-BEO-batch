import { configureStore } from "@reduxjs/toolkit";
import userSlice from './user'
import productSlice from "./products";
export const store = configureStore({
    reducer: {
        user: userSlice,
        products: productSlice
    }
})