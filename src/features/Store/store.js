// import { configureStore } from "@reduxjs/toolkit";
// import { AuthApi } from "../api/AuthApi";
// import { ContactApi } from "../api/ContactApi";
// import ContactSlice from "../services/ContactSlice";

// export const store = configureStore({
//   reducer: {
//     [AuthApi.reducerPath]: AuthApi.reducer,
//     [ContactApi.reducerPath]: ContactApi.reducer,
//     ContactSlice: ContactSlice
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(AuthApi.middleware,ContactApi.middleware),
// });
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { AuthApi } from "../api/AuthApi"
import { ContactApi } from "../api/ContactApi"
import authSlice from "../services/authSlice"
import ContactSlice from "../services/ContactSlice"

export const store = configureStore({
  reducer: {
    [AuthApi.reducerPath]: AuthApi.reducer,
    [ContactApi.reducerPath]: ContactApi.reducer,
    ContactSlice: ContactSlice,
    authslice : authSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(AuthApi.middleware, ContactApi.middleware),
});

// Set up listeners for automatic cache invalidation and background polling
setupListeners(store.dispatch);
