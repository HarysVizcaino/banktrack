import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface FloatingMenuProps {
  onPress: (screen: string) => void;
}

const FloatingMenu = ({ onPress }: FloatingMenuProps) => {
  return (
    <View style={styles.menuContainer}>
      {/* Left Icons */}
      <TouchableOpacity style={styles.iconButton} onPress={() => onPress("wallet")}>
        <Ionicons name="wallet-outline" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton} onPress={() => onPress("stats")}>
        <Ionicons name="bar-chart-outline" size={24} color="white" />
      </TouchableOpacity>

      {/* Center Floating Icon */}
      <TouchableOpacity style={styles.centerButton} onPress={() => onPress("transactions")}>
        <Ionicons name="swap-horizontal-outline" size={28} color="white" />
      </TouchableOpacity>

      {/* Right Icons */}
      <TouchableOpacity style={styles.iconButton} onPress={() => onPress("chat")}>
        <Ionicons name="chatbubble-outline" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton} onPress={() => onPress("settings")}>
        <Ionicons name="settings-outline" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#000",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  iconButton: {
    padding: 10,
  },
  centerButton: {
    backgroundColor: "#1C1C1E", // Darker background for center button
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
});

export default FloatingMenu;
