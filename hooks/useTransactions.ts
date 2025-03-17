import { getTransactions } from "@/api";
import { RootState } from "@/store";
import { transactionStart, setTransactions, fetchTransactionsFailure, setTransactionFilter } from "@/store/transactionSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export function useTransactions() {
    const [error, setError] = useState<string | null>(null);
    const dispatch = useDispatch();
    const { transactions, loading, filter } = useSelector((state: RootState) => state.transactions);
    const { selectedAccount } = useSelector((state: RootState) => state.account);
      useEffect(() => {

        const fetchAccounts = async () => {
          dispatch(transactionStart());
          try {
            if(selectedAccount) {
                const response = await getTransactions(filter == 'all' ? undefined : filter, selectedAccount?.id)
                dispatch(setTransactions(response));
            }
          } catch (err) {
            setError("Failed to fetch accounts");
            dispatch(fetchTransactionsFailure());
          }
        };
    
        fetchAccounts();
      }, [dispatch, filter, selectedAccount]);
      
      return {
        transactions,
        selectedAccount,
        loading,
        error,
        setTransactionFilter,
      };
}
