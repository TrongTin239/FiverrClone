import { configureStore, PayloadAction } from "@reduxjs/toolkit";
import jobReducers from "./reducers/jobReducers";

export const store = configureStore({
  reducer: {
    jobReducers: jobReducers,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
