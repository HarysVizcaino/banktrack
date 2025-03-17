import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import accountReducer from "./accountSlice";
import beneficiaryReducer from './beneficiarySlice';
import languageReducer from './languageSlice';
import TransactionReducer from './transactionSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    account: accountReducer,
    beneficiary: beneficiaryReducer,
    language: languageReducer,
    transactions: TransactionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;