import { Transaction } from "@/types/transactions";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TransactionState {
    transactions: Transaction[];
    filter: string;
    loading: boolean;
  }

  const initialState: TransactionState = {
    transactions: [],
    filter: "all",
    loading: false,
  };

  const transactionSlice = createSlice({
    name: "transaction",
    initialState,
    reducers: {
      transactionStart: (state) => {
        state.loading = true;
      },
      setTransactionFilter: (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.filter = action.payload;
      },
      setTransactions: (state, action: PayloadAction<Transaction[]>) => {
        state.loading = false;
        state.transactions = action.payload;
      },
      fetchTransactionsFailure: (state) => {
        state.loading = false;
      },
    },
  });
  
  export const { setTransactionFilter, setTransactions, transactionStart, fetchTransactionsFailure } = transactionSlice.actions;
  export default transactionSlice.reducer;