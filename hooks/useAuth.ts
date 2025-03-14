import { useDispatch, useSelector } from "react-redux";
import { signInStart, signInSuccess, signInFailure, signOut, signUpSuccess, signUpStart, signUpFailure } from "@/store/authSlice";
import { RootState } from "@/store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RelativePathString, useRouter } from "expo-router";
import { ROUTES } from "@/constants/routes";

const API_URL = "/api/auth/login";
const REGISTER_API = "/api/auth/register";

export function useAuth() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user, token, loading, isError, isAuthSuccess } = useSelector((state: RootState) => state.auth);

  const signIn = async (email: string, password: string) => {
    dispatch(signInStart());
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) throw new Error("Invalid credentials");

      const { token, user } = await response.json();
      
      await AsyncStorage.setItem("auth_token", token);
      await AsyncStorage.setItem("user", JSON.stringify(user));

      dispatch(signInSuccess({ user, token }));
      router.replace("/home"); 
    } catch (error) {
      dispatch(signInFailure());
    }
  };

  const handleSignOut = async () => {
    await AsyncStorage.removeItem("auth_token");
    await AsyncStorage.removeItem("user");
    dispatch(signOut());
    router.replace("/login"); // Redirect to sign-in page
  };

  const signUp = async (fullName: string, id: string, phoneNumber: string) => {
    dispatch(signUpStart());
    try {
      const response = await fetch(REGISTER_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, id, phoneNumber }),
      });

      if (!response.ok) throw new Error("Registration failed");
      dispatch(signUpSuccess());
      router.replace(ROUTES.REGISTER_SUCCESS as RelativePathString); // Navigate to home after successful sign-up
    } catch (error) {
      dispatch(signUpFailure());
      console.error("Sign-up failed:", error);
    }
  };

  return { user, token, loading, signUp, isError, signIn, handleSignOut, isAuthSuccess };
}