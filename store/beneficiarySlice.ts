import { Beneficiary } from "@/types/beneficiary";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";



interface BeneficiaryState {
    beneficiaries: Beneficiary[];
    selectedBeneficiary: Beneficiary | null;
    loading: boolean;
    error: string | null;
  }


const initialState: BeneficiaryState = {
    beneficiaries: [],
    selectedBeneficiary: null,
    loading: false,
    error: null,
  };


  const beneficiaries = createSlice({
    name: "beneficiary",
    initialState,
    reducers: {
        fetchBeneficiaryStart: (state) => {
            state.loading = true;
          },

          fetchBeneficiarySuccess: (state, action: PayloadAction<Beneficiary[]>) => {
            state.beneficiaries = action.payload;
            state.loading = false;
          },

          fetchBeneficiaryFailure: (state) => {
            state.loading = false;
          },
    },
  });


  export const { fetchBeneficiaryStart, fetchBeneficiarySuccess, fetchBeneficiaryFailure } = beneficiaries.actions;
  export default beneficiaries.reducer;