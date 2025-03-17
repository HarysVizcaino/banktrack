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


export const getAccountById = async (id: string): Promise<Account> => {
  try {
    const response = await api.get<Account>(`/accounts/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch account");
  }
};