import { Transaction } from "@/types/transactions";
import api from "./api";
import { Account, AccountList } from "@/types";


export const getAccounts = async (): Promise<AccountList> => {
  try {
    const response = await api.get<{ accounts: AccountList }>("/accounts");
    return response.data.accounts;
  } catch (error) {
    throw new Error("Failed to fetch accounts");
  }
};


export const getAccountById = async (id: number): Promise<Account> => {
  try {
    const response = await api.get<Account>(`/accounts/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch account");
  }
};


export const getTransactionsByAccountId = async (id: number): Promise<Transaction[]> => {
  try {
    const response = await api.get<Transaction[]>(`/accounts/${id}/transactions`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch account");
  }
};