import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import accountReducer from "./accountSlice";
import beneficiaryReducer from './beneficiarySlice';
import languageReducer from './languageSlice';
import TransactionReducer from './transactionSlice';

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["language", "user", "token"], 
};

const persistedLanguageReducer = persistReducer(persistConfig, languageReducer);

export const store = configureStore({
  reducer: {
    auth: authReducer,
    account: accountReducer,
    beneficiary: beneficiaryReducer,
    language: persistedLanguageReducer,
    transactions: TransactionReducer,
  },
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;