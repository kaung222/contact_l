import { configureStore } from "@reduxjs/toolkit";
import { AuthApi } from "../api/AuthApi";
import { ContactApi } from "../api/ContactApi";
import ContactSlice from "../services/ContactSlice";

export const store = configureStore({
  reducer: {
    [AuthApi.reducerPath]: AuthApi.reducer,
    [ContactApi.reducerPath]: ContactApi.reducer,
    ContactSlice: ContactSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(AuthApi.middleware,ContactApi.middleware),
});
