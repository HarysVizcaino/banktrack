import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "@/types";
import { t } from "i18next";


interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean;
  isError: boolean;
  isAuthSuccess: boolean;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  token: null,
  loading: false,
  isError: false,
  isAuthSuccess: false,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action: PayloadAction<{ user: User; token: string }>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.loading = false;
    },
    signInFailure: (state) => {
      state.loading = false;
      state.isError = true;
    },
    signOut: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      AsyncStorage.removeItem("auth_token");
      AsyncStorage.removeItem("user");
    },
    signUpStart: (state) => {
      state.loading = true;
    },
    signUpSuccess: (state) => {
      state.isAuthSuccess = false;
      state.loading = false;
    },
    signUpFailure: (state) => {
      state.isError = false;
      state.loading = false;
    },
  },
});

export const { signInStart, signInSuccess, signInFailure, signOut, signUpStart, signUpFailure, signUpSuccess } = authSlice.actions;
export default authSlice.reducer;