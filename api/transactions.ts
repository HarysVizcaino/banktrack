import api from "./api";

export const getTransactions = async (accountId: string) => {
  const response = await api.get(`/accounts/${accountId}/transactions`);
  return response.data;
};