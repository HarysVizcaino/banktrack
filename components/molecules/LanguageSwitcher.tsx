import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import CountryFlag from "react-native-country-flag";
import i18n from "@/locales/i18n";
const LanguageSwitchButton = () => {
  const [language, setLanguage] = useState(i18n.language);

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "es" : "en";
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
  };

  return (
    <TouchableOpacity style={styles.button} onPress={toggleLanguage} activeOpacity={0.7}>
      <View style={styles.flagContainer}>
        <CountryFlag isoCode={language === "en" ? "US" : "ES"} size={15} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  flagContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LanguageSwitchButton;
