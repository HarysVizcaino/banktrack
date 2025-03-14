import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import LanguageSwitchButton from "@/components/molecules/LanguageSwitcher";


const LOGO = require("../../assets/images/only-logo.png");

const LoginScreen = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const handleSigin = () => {
    router.push('/home')
  }
  return (
    <View style={styles.container}>
      {/* Header: Back Button & Language Switch */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="white" />
        </TouchableOpacity>
        <LanguageSwitchButton />
      </View>

      {/* Logo */}
      <Image source={LOGO} style={styles.logo} />

      {/* Title */}
      <Text style={styles.title}>{t('personalAccount')}</Text>

      {/* Input Fields */}
      <TextInput style={styles.input} placeholder={t('username')} placeholderTextColor="gray" />
      <TextInput style={styles.input} placeholder={t('password')} placeholderTextColor="gray" secureTextEntry />

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.resetButton}>
          <Text style={styles.resetText}>{t('reset')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={handleSigin}>
          <Text style={styles.loginText}>{t('login')}</Text>
        </TouchableOpacity>
      </View>

      {/* Register Button */}
      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerText}>{t('registerNow')}</Text>
      </TouchableOpacity>

      {/* Forgot Credentials */}
      <View style={styles.footer}>
        <TouchableOpacity>
          <Text style={styles.footerText}>{t('forgotUsername')}</Text>
        </TouchableOpacity>
        <Text style={styles.divider}>|</Text>
        <TouchableOpacity>
          <Text style={styles.footerText}>{t('forgotPassword')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  flagIcon: {
    width: 24,
    height: 16,
  },
  logo: {
    width: 120,
    height: 130,
    alignSelf: "center",
    marginBottom: 20,
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#1C1C1E",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 12,
    color: "white",
    fontSize: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#333",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  resetButton: {
    backgroundColor: "#F4B400",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  resetText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  loginButton: {
    backgroundColor: "#1E88E5",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  loginText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  registerButton: {
    backgroundColor: "#111",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#333",
  },
  registerText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  footerText: {
    color: "#777",
    fontSize: 14,
  },
  divider: {
    color: "#777",
    marginHorizontal: 10,
  },
});

export default LoginScreen;