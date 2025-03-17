import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAccountsStart, fetchAccountsSuccess, fetchAccountsFailure, selectAccount } from "@/store/accountSlice";
import { RootState } from "@/store";
import { getAccounts, getAccountById as apiGetAccountById } from "@/api";

export function useAccounts() {
  const dispatch = useDispatch();
  const { accounts, selectedAccount, loading } = useSelector((state: RootState) => state.account);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAccounts = async () => {
      dispatch(fetchAccountsStart());
      try {
        const response = await getAccounts()

        dispatch(fetchAccountsSuccess(response));
      } catch (err) {
        setError("Failed to fetch accounts");
        dispatch(fetchAccountsFailure());
      }
    };

    fetchAccounts();
  }, [dispatch]);

  const getAccountById = async (id: string) => {
    try {
      const response = await apiGetAccountById(id);
      dispatch(selectAccount(response));
    } catch (err) {
      setError("Account not found");
    }
  };

  return {
    accounts,
    selectedAccount,
    loading,
    error,
    getAccountById, 
  };
}