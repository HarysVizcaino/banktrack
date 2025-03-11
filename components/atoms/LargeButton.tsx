import { Colors } from "@/constants/Colors";
import React from "react";
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";

interface LargeButtonProps {
  label: string;
  onPress: () => void;
  size?: "small" | "medium" | "large";
  variant?: "solid" | "outline";
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  style?: ViewStyle;
  styleText?: TextStyle;
}

const LargeButton = ({
  label,
  onPress,
  variant = "solid",
  size = "medium",
  backgroundColor = Colors.light.tint,
  textColor = "#fff",
  borderColor = Colors.dark.tint,
  style,
  styleText,
}: LargeButtonProps) => {

  const buttonStyles = [
    styles.button,
    styles[size], // Apply size-specific styles
    { backgroundColor },
    style,
  ];

  const textStyles = [
    styles.text,
    styleText,
    {
      color: variant === "solid" ? textColor : borderColor
    }
  ]
  
  return (
    <TouchableOpacity
      style={[
        buttonStyles,
        variant === "solid"
          ? { backgroundColor }
          : { backgroundColor: "transparent", borderColor, borderWidth: 2 },
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={textStyles || [styles.text, { color: textColor }]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "90%",
    paddingVertical: 16,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginVertical: 10,
  },
  small: {
    width: 120,
    paddingVertical: 12,
  },
  medium: {
    width: "90%",
    paddingVertical: 12,
  },
  large: {
    width: "100%",
    paddingVertical: 18,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default LargeButton;
