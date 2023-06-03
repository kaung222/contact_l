import { configureStore } from "@reduxjs/toolkit";
import { AuthApi } from "../api/AuthApi";
import { ContactApi } from "../api/ContactApi";
import ContactSlice from "../services/ContactSlice";

export const store = configureStore({
  reducer: {
    [AuthApi]: AuthApi.reducer,
    [ContactApi]: ContactApi.reducer,
    ContactSlice: ContactSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(AuthApi.middleware,ContactApi.middleware),
});
