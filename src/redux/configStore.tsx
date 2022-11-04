import { configureStore, PayloadAction } from "@reduxjs/toolkit";
import adminReducer from "./reducers/adminReducer";
import jobReducers from "./reducers/jobReducers";
import servicerReducer from "./reducers/serviceReducer";
import typeWorkReducer from "./reducers/typeWorkReducer";
import userReducer from "./reducers/userReducer";
import workReducer from "./reducers/workReducer";

export const store = configureStore({
  reducer: {
    jobReducers: jobReducers,
    userReducer:userReducer,
    adminReducer:adminReducer,
    serviceReducer:servicerReducer,
    workReducer:workReducer,
    typeworkReducer:typeWorkReducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
