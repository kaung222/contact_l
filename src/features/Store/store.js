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

import { authApi } from "../api/AuthApi";
import { contactApi } from "../api/ContactApi";
import contactSlice from "../services/ContactSlice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [contactApi.reducerPath]: contactApi.reducer,
    ContactSlice: contactSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, contactApi.middleware),
});

// Set up listeners for automatic cache invalidation and background polling
setupListeners(store.dispatch);
