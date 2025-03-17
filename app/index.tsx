import React, { useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { makeServer } from "../server/mirage";
import { View, Text, TouchableOpacity, Image, StyleSheet, ActivityIndicator } from "react-native";
import { useTranslation } from "react-i18next";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import LanguageSwitchButton from "@/components/molecules/LanguageSwitcher";

if (process.env.NODE_ENV === "development") {
  if (!window.mirageServer) {
    makeServer();
  }

  if (module.hot) {
    module.hot.dispose(() => {
      window.mirageServer?.shutdown(); // ✅ Properly shuts down Mirage on refresh
      delete window.mirageServer;
    });
  }
}

if (process.env.NODE_ENV === "development") {
  console.log('RUnning dev');
  makeServer();
}



const LOGO = require("../assets/images/banklogo.png");

const WelcomeScreen = () => {
  const { user, token } = useAuth();
  const { t } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    if(user && token) {
      router.push('/home')
    }
  }, [])

  return (
    <View style={styles.container}>
      {/* Header: Language & Help Button */}
      <View style={styles.header}>
        <LanguageSwitchButton />
        <TouchableOpacity style={styles.helpButton}>
          <Ionicons name="help-circle-outline" size={24} color="white" />
          <Text style={styles.helpText}>{t('help')}</Text>
        </TouchableOpacity>
      </View>

      {/* Logo */}
      <Image source={LOGO} style={styles.logo} />

      {/* Title & Subtitle */}
      <Text style={styles.title}>{t('welcome')}</Text>
      <Text style={styles.subtitle}>{t('description')}</Text>

      {/* Buttons */}
      <TouchableOpacity style={styles.signUpButton} onPress={() => router.push("/register")}>
        <Text style={styles.signUpText}>{t('register')}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={() => router.push("/login")}>
        <Text style={styles.loginText}>{t('login')}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    top: 10,
    width: "110%",
    paddingHorizontal: 20,
  },
  flagIcon: {
    width: 24,
    height: 16,
  },
  helpButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1C1C1E",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  helpText: {
    color: "white",
    marginLeft: 5,
  },
  logo: {
    width: 240,
    height: 240,
    alignSelf: "center",
    marginBottom: 20,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    color: "#aaa",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
  },
  signUpButton: {
    backgroundColor: "#1E88E5",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15,
  },
  signUpText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  loginButton: {
    borderColor: "#1E88E5",
    borderWidth: 2,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  loginText: {
    color: "#1E88E5",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default WelcomeScreen;