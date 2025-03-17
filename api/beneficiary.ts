import { Beneficiary } from "@/types/beneficiary";
import api from "./api";
import beneficiaries from '../store/beneficiarySlice';

export const getBeneficiaries = async (): Promise<Beneficiary[]>  => {
    const response = await api.get<{ beneficiaries: Beneficiary[] }>("/beneficiaries");
    return response.data.beneficiaries;
  };

  export const addBeneficiary = async (newBeneficiary: Beneficiary) => {
    const response = await api.post("/beneficiaries", newBeneficiary);
    return response.data;
  };

  export const deleteBeneficiary = async (accountNumber: number) => {
    const response = await api.delete(`/beneficiaries/${accountNumber}`);
    return response.data;
  };