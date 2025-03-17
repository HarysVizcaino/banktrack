export type AccountType = "checking" | "savings" | 'independentAccount' | 'payrollAccount';


export interface Account {
    id: string;
    amount: number;
    state: "active" | "inactive";
    type: AccountType;
    createdAt: string;
    accountNumber: string;
  }

  export type AccountList = Account[];