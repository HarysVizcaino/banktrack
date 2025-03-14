import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface TrainingCardProps {
  title: string;
  iconName: keyof typeof Ionicons.glyphMap;
}

const TrainingCard = ({ title, iconName }: TrainingCardProps) => {
  return (
    <View style={styles.card}>
        <View style={styles.iconContainer}>
        <Ionicons name={iconName} size={30} color="#FFF" />
        </View>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1C1C1E", 
    borderRadius: 16,
    padding: 10,
    alignItems: "flex-start",
    justifyContent: "space-around",
    width: '45%',
    height: 100,
  },
  iconContainer: {
    backgroundColor: '#232323',
    borderRadius:12,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 8,
    textAlign: "center",
  },
});

export default TrainingCard;
