import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";

interface CardProps {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
}

export const Card = ({ children, size = "medium" }: CardProps) => {
  return <View style={[styles.container, styles[size]]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    borderRadius: 10,
    padding: 16,
  },
  small: {
    width: "60%",
    height: 100,
  },
  medium: {
    width: "80%",
    height: 150,
  },
  large: {
    width: "100%",
    height: 200,
  },
});

export default Card;
