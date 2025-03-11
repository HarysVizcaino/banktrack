import React, { useState } from "react";
import { View, Image, StyleSheet } from "react-native";
import { HeaderText } from "@/components/atoms/StyledText";
import InputText from "@/components/atoms/InputText";
import LargeButton from "@/components/atoms/LargeButton";
import { useTranslation } from "react-i18next";
import { Colors } from "@/constants/Colors";

const LOGO = require("../../assets/images/only-logo.png");

interface LoginFormProps {
  onLoginPress: () => void;
}

const LoginForm = ({ onLoginPress }: LoginFormProps) => {
  const { t } = useTranslation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.form}>
      {/* Logo */}
      <Image source={LOGO} style={styles.logo} />

      {/* Title */}
      <HeaderText style={styles.headerText}>{t("personalAccount")}</HeaderText>

      {/* Input Fields */}
      <InputText 
        borderColor={Colors.dark.tint}
        placeholder={t("username")}
        value={username}
        onChangeText={setUsername}
      />
      <InputText
        placeholder={t("password")}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <LargeButton 
          backgroundColor={Colors.light.warning}
          size="small"
          label={t("reset")}
          styleText={{ fontWeight: "600" }}
          onPress={onLoginPress}
        />
        <LargeButton 
          size="small"
          label={t("loginNow")}
          styleText={{ fontWeight: "600" }}
          onPress={onLoginPress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 130,
    height: 160,
    marginBottom: 25,
  },
  headerText: {
    marginBottom: 10,
    fontSize: 24,
    textAlign: "left",
    width: "90%",
  },
  buttonContainer: {
    marginTop: 20,
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default LoginForm;
