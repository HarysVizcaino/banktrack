import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface MessageProps {
  type: "success" | "warning" | "error";
  message: string;
}

const Message: React.FC<MessageProps> = ({ type, message }) => {
  const backgroundColor = {
    success: "#4CAF50",
    warning: "#FFC107",
    error: "#F44336",
  }[type];

  return (
    <View testID="message-container" style={[styles.container, { backgroundColor }]}>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 5,
    marginVertical: 8,
    alignItems: "center",
  },
  message: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Message;