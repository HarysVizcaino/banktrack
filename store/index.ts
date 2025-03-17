import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import accountReducer from "./accountSlice";
import beneficiaryReducer from './beneficiarySlice';
import languageReducer from './languageSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    account: accountReducer,
    beneficiary: beneficiaryReducer,
    language: languageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;