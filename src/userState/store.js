import { configureStore } from "@reduxjs/toolkit";
import animalsReducer from "./animalsSlice";

export const store = configureStore({
  reducer: {
    animals: animalsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
