import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface SegmentedControlProps {
  options: string[];
  onSelect: (value: string, index: number) => void;
}

const SegmentedControl = ({ options, onSelect }: SegmentedControlProps) => {
  const [selected, setSelected] = useState(options[0]);

  const handleSelect = (option: string, index: number) => {
    setSelected(option);
    onSelect(option, index);
  };

  return (
    <View style={styles.container}>
      {options.map((option, index) => (
        <TouchableOpacity
          key={option}
          style={[styles.option, selected === option && styles.selectedOption]}
          onPress={() => handleSelect(option, index)}
        >
          <Text style={[styles.text, selected === option && styles.selectedText]}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#1C1C1E",
    borderRadius: 16,
    padding: 4,
    justifyContent: "center",
  },
  option: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 12,
  },
  selectedOption: {
    backgroundColor: "#333", // Highlight selected item
  },
  text: {
    color: "#aaa",
    fontSize: 14,
  },
  selectedText: {
    color: "#fff", // White text for selected item
    fontWeight: "bold",
  },
});

export default SegmentedControl;