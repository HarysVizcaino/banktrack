import { useDispatch, useSelector } from "react-redux";
import { signInStart, signInSuccess, signInFailure, signOut, signUpSuccess, signUpStart, signUpFailure } from "@/store/authSlice";
import { RootState } from "@/store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RelativePathString, useRouter } from "expo-router";
import { ROUTES } from "@/constants/routes";
import { apiSignIn, apiSignUp } from "@/api";


export function useAuth() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user, token, loading, isError, isAuthSuccess } = useSelector((state: RootState) => state.auth);

  const signIn = async (email: string, password: string) => {
    dispatch(signInStart());
    try {
      const response = await apiSignIn(email, password);

      const { token, user } = response;
      
      await AsyncStorage.setItem("auth_token", token);
      await AsyncStorage.setItem("user", JSON.stringify(user));

      dispatch(signInSuccess({ user, token }));
      router.replace("/home"); 
    } catch (error) {
      dispatch(signInFailure());
    }
  };

  const signUp = async (
    fullName: string, 
    email: string, 
    password: string, 
    identification: string, 
    phoneNumber: string
  ) => {
    dispatch(signUpStart());
    try {
      await apiSignUp(fullName, email, password, identification, phoneNumber)

      dispatch(signUpSuccess());
      router.replace(ROUTES.REGISTER_SUCCESS as RelativePathString);
    } catch (error) {
      dispatch(signUpFailure());
    }
  };


  const handleSignOut = async () => {
    await AsyncStorage.removeItem("auth_token");
    await AsyncStorage.removeItem("user");
    dispatch(signOut());
    router.replace("/login"); // Redirect to sign-in page
  };


  return { user, token, loading, signUp, isError, signIn, handleSignOut, isAuthSuccess };
}