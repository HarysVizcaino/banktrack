export type TransactionType = "shopping" | "transfer" | 'deposit' | 'salary' | 'gas'; 



export interface Transaction {
    id: string,
    amount: number,
    type: TransactionType,
    createdAt: string,
    description: string,
}