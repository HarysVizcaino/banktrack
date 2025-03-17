import axios, { AxiosError } from "axios";
import { User } from '@/store/authSlice';
import api from "./api";

const API_URL = "/auth";

export const apiSignIn = async (email: string, password: string): Promise<{
  user: User,
  token: string
}> => {
  try {
    const response = await api.post<{ user: User, token: string }>(`${API_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    console.log(error);
    const axiosError = error as AxiosError<{ error: string }>;
    if (axiosError.response?.data?.error) {
      throw new Error(axiosError.response.data.error);
    }

    throw new Error("An unexpected error occurred")
  }
};


export const apiSignUp = async (fullName: string, email: string, password: string, identification: string, phoneNumber: string) => {
  try {
    const response = await api.post(`${API_URL}/register`, { 
      fullName,
      email,
      password,
      identification,
      phoneNumber
     });
    return response.data;
  } catch (error) {
    console.log(error);
    const axiosError = error as AxiosError<{ error: string }>;
    if (axiosError.response?.data?.error) {
      throw new Error(axiosError.response.data.error);
    }

    throw new Error("An unexpected error occurred")
  }
}