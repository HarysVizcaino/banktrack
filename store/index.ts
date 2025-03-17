import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import accountReducer from "./accountSlice";
import beneficiaryReducer from './beneficiarySlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    account: accountReducer,
    beneficiary: beneficiaryReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;