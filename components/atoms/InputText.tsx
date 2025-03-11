import React from "react";
import { TextInput, StyleSheet, View, Text } from "react-native";

interface InputTextProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  borderColor?: string;
  secureTextEntry?: boolean; // For password inputs
}

const InputText = ({
  placeholder,
  value,
  onChangeText,
  borderColor = "#187AC0",
  secureTextEntry = false,
}: InputTextProps) => {
  return (
    <View style={[styles.container, { borderColor }]}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#aaa"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 12,
    paddingVertical: 14,
    marginVertical: 10,
    backgroundColor: "#fff",
  },
  input: {
    fontSize: 16,
    color: "#333",
  },
});

export default InputText;
