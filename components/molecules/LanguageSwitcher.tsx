import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import CountryFlag from "react-native-country-flag";
import i18n from "@/locales/i18n";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setLanguage } from "@/store/languageSlice";


const LanguageSwitchButton = () => {
  const dispatch = useDispatch();
  const language = useSelector((state: RootState) => state.language.language);

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "es" : "en";
    dispatch(setLanguage(newLanguage));
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
    alignItems: "center",
    justifyContent: "center",
  },
  flagContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LanguageSwitchButton;
