const API_URL = "/api";

export const fetchTransactions = async (token: string) => {
  const response = await fetch(`${API_URL}/transactions`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  console.log('===RESPONSE', response);
  if (!response.ok) throw new Error("Unauthorized");

  return response.json();
};