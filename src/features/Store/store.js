import { configureStore } from "@reduxjs/toolkit";
import { AuthApi } from "../api/AuthApi";
import { ContactApi } from "../api/ContactApi";

export const store = configureStore({
  reducer: {
    [AuthApi]: AuthApi.reducer,
    [ContactApi]: ContactApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(AuthApi.middleware,ContactApi.middleware),
});
