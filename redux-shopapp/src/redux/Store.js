import { configureStore } from "@reduxjs/toolkit";
import {CardSlice }from "./Slices/CardSlice";


export const store = configureStore({
    reducer: {
        cart :  CardSlice,
    }
});