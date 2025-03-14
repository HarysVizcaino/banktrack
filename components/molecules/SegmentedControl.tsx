import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface SegmentedControlProps {
  options: string[];
  onSelect: (value: string) => void;
}

const SegmentedControl = ({ options, onSelect }: SegmentedControlProps) => {
  const [selected, setSelected] = useState(options[2]);

  const handleSelect = (option: string) => {
    setSelected(option);
    onSelect(option);
  };

  return (
    <View style={styles.container}>
      {options.map((option) => (
        <TouchableOpacity
          key={option}
          style={[styles.option, selected === option && styles.selectedOption]}
          onPress={() => handleSelect(option)}
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
    justifyContent: "space-between",
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
    fontSize: 16,
  },
  selectedText: {
    color: "#fff", // White text for selected item
    fontWeight: "bold",
  },
});

export default SegmentedControl;