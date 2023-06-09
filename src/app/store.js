import { configureStore } from "@reduxjs/toolkit";
import { contentApi } from "../features/ContactApi"
import authSlice from "../features/authSlice"

export const store = configureStore({
    reducer : {
        [contentApi.reducerPath] : contentApi.reducer,
        authslice : authSlice
    },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contentApi.middleware),
})