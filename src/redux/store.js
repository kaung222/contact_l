import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/authApi";
import { contactApi } from "./api/contactApi";
import authSlice from "./services/authSlice";
import { setupListeners } from "@reduxjs/toolkit/query/react";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    contact: contactApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactApi.middleware, authApi.middleware),
});

setupListeners(store); // Call setupListeners after creating the store

export default store;
