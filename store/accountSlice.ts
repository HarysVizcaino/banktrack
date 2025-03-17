import { Account, AccountList } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AccountState {
    accounts: AccountList;
    selectedAccount: Account | null;
    loading: boolean;
  }

  const initialState: AccountState = {
    accounts: [],
    selectedAccount: null,
    loading: false,
  };

  const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
      fetchAccountsStart: (state) => {
        state.loading = true;
      },
      fetchAccountsSuccess: (state, action: PayloadAction<AccountList>) => {
        state.accounts = action.payload;
        state.loading = false;
      },
      fetchAccountsFailure: (state) => {
        state.loading = false;
      },
      selectAccount: (state, action: PayloadAction<Account>) => {
        state.selectedAccount = action.payload;
      },
      cleanSelectAccount: (state) => {
        state.selectedAccount = initialState.selectedAccount;
      },
      updateAccount: (state, action: PayloadAction<{ id: string; amount: number }>) => {
        const account = state.accounts.find((acc) => acc.id === action.payload.id);
        if (account) {
          account.amount = action.payload.amount;
        }
      },
      addAccount: (state, action: PayloadAction<Account>) => {
        state.accounts.push(action.payload);
      },
    },
  });

  export const { 
    fetchAccountsStart, 
    fetchAccountsSuccess, 
    fetchAccountsFailure, 
    selectAccount, 
    updateAccount, 
    addAccount,
    cleanSelectAccount 
  } = accountSlice.actions;
  
  export default accountSlice.reducer;