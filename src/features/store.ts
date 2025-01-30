import { configureStore } from "@reduxjs/toolkit";
import cryptoSlice from "./cryptoSlice.ts";

export const store = configureStore({
  reducer: { crypto: cryptoSlice },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
