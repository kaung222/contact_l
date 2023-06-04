import { configureStore } from "@reduxjs/toolkit";
import { AuthApi } from "../api/AuthApi";
import { ContactApi } from "../api/ContactApi";

export const store = configureStore({
  reducer: {
    [AuthApi.reducerPath]: AuthApi.reducer,
    [ContactApi.reducerPath]: ContactApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(AuthApi.middleware,ContactApi.middleware),
});
