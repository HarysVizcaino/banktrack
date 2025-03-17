import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useRouter } from "expo-router";
import { View, ActivityIndicator } from "react-native";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, token } = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated || !token) {
      router.replace("/"); // ✅ Redirect to login if not authenticated
    }
  }, [isAuthenticated, token]);

  if (!isAuthenticated) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#FFD700" />
      </View>
    );
  }

  return children;
};

export default ProtectedRoute;