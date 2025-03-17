import api from "./api";


export const getTransactions = async (type?: string, accountId?: string) => {
  const params = new URLSearchParams();
  if (type) params.append("type", type);
  if (accountId) params.append("accountId", accountId);

  const response = await api.get(`/transactions?${params.toString()}`);
  return response.data;
};