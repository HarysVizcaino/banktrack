import React from "react";
import "@/locales/i18n";
import { useTranslation } from "react-i18next";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Make sure Expo Icons are installed
import { Colors } from "@/constants/Colors";

interface HelpButtonProps {
  onPress: () => void;
  size?: number;
  backgroundColor?: string;
  textColor?: string;
  iconColor?: string;
}

const HelpButton = ({
  onPress,
  size = 60,
  backgroundColor = Colors.light.tint,
  textColor = "#fff",
  iconColor = "#fff",
}: HelpButtonProps) => {
  const { t } = useTranslation();
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { width: size, height: size, borderRadius: size / 2, backgroundColor },
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Ionicons name="help-circle-outline" size={size * 0.5} color={iconColor} />
      <Text style={[styles.text, { color: textColor }]}>{t('help')}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    padding: 8,
  },
  text: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 2, 
  },
});

export default HelpButton;
