import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import LargeButton from "@/components/atoms/LargeButton";
import { useTranslation } from "react-i18next";

const LoginFooter = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.footerContainer}>
      {/* Horizontal Divider */}
      <View style={styles.horizontalCrumb} />

      {/* Register Button */}
      <LargeButton
        size="medium"
        style={{
          width: "80%",
          paddingVertical: 16,
        }}
        label={t("registerNow")}
        onPress={() => {}}
      />

      {/* Forgot Username / Password Section */}
      <View style={styles.forgotSection}>
        <TouchableOpacity style={styles.navigationButton} onPress={() => {}}>
          <Text style={styles.forgotText}>{t("forgotUsername")}</Text>
        </TouchableOpacity>
        <View style={styles.verticalCrumb} />
        <TouchableOpacity style={styles.navigationButton} onPress={() => {}}>
          <Text style={styles.forgotText}>{t("forgotPassword")}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    padding: 20,
    alignItems: "center",
  },
  horizontalCrumb: {
    backgroundColor: "#ccc",
    width: "90%",
    height: 1,
    marginBottom: 20,
  },
  forgotSection: {
    flexDirection: "row",
    justifyContent: "center",
    width: "90%",
    marginTop: 30,
  },
  navigationButton: {},
  forgotText: {
    color: "#aeafb3",
  },
  verticalCrumb: {
    backgroundColor: "#ccc",
    width: 2,
    height: 16,
    marginRight: 10,
    marginLeft: 10,
  },
});

export default LoginFooter;
