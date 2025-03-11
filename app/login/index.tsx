import React from "react";
import { View, StyleSheet } from "react-native";
import HeaderTemplate from "@/components/templates/HeaderTemplate";
import LoginForm from "@/components/organisms/LoginForm";
import LoginFooter from "@/components/organisms/LoginFooter";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const router = useRouter();

  const handleLogin = () => {
    router.replace("/");
  };

  return (
    <HeaderTemplate showBackButton title="Login">
      <View style={styles.container}>
        <LoginForm onLoginPress={handleLogin} />
        <LoginFooter />
      </View>
    </HeaderTemplate>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
});
