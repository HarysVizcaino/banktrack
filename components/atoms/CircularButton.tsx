import { Colors } from "@/constants/Colors";
import React from "react";
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from "react-native";

interface CircularButtonProps {
  label?: string;
  onPress: () => void;
  size?: number;
  backgroundColor?: string;
  textColor?: string;
  style?: ViewStyle;
}

const CircularButton = ({
  label = "",
  onPress,
  size = 70,
  backgroundColor = Colors.dark.tint,
  textColor = "#fff",
  style,
}: CircularButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { width: size, height: size, borderRadius: size / 2, backgroundColor },
        style,
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.text, { color: textColor }]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CircularButton;
