import { Colors } from "@/constants/Colors";
import React from "react";
import { Text, StyleSheet, TextProps } from "react-native";

interface StyledTextProps extends TextProps {
  children: React.ReactNode;
}

export const HeaderText = ({ children, style, ...props }: StyledTextProps) => {
  return <Text style={[styles.header, style]} {...props}>{children}</Text>;
};

export const ParagraphText = ({ children, style, ...props }: StyledTextProps) => {
  return <Text style={[styles.paragraph, style]} {...props}>{children}</Text>;
};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.light.tint,
    textAlign: "center",
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    lineHeight: 22,
  },
});
