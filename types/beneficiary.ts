import { AccountType } from "./accounts";

export interface Beneficiary {
    id: number;
    fullName: string;
    accountNumber: number;
    accountType: AccountType
}