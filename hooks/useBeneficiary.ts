import { getBeneficiaries } from "@/api/beneficiary";
import { RootState } from "@/store";
import { fetchBeneficiaryStart, fetchBeneficiarySuccess, fetchBeneficiaryFailure } from "@/store/beneficiarySlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export function useBeneficiary() { 
    const dispatch = useDispatch();
  const { beneficiaries, loading } = useSelector((state: RootState) => state.beneficiary);
  const [error, setError] = useState<string | null>(null);

  const fetchBeneficiaries = async () => {
    dispatch(fetchBeneficiaryStart());
    try {
      const response = await getBeneficiaries();
      dispatch(fetchBeneficiarySuccess(response));
    } catch (err) {
      setError("Failed to fetch beneficiaries");
      dispatch(fetchBeneficiaryFailure());
    }
  };

  useEffect(() => {
    if (beneficiaries.length === 0) { 
      fetchBeneficiaries();
    }

  }, [dispatch, beneficiaries.length])




  return {
    beneficiaries,
    fetchBeneficiaries,
    loading,
    error,
  };
}