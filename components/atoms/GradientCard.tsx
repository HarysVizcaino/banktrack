import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ViewStyle } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

interface GradientCardProps {
  title: string;
  amount: number;
  lastDigits?: string;
  accountNumber?: string;
  icon?: any;
  style?: ViewStyle;
}

const GradientCard = ({
  title,
  amount,
  lastDigits = "**** 1234",
  accountNumber = "** 5678",
  icon,
  style,
}: GradientCardProps) => {
  return (
    <LinearGradient
      colors={["#1a1a1a", "#424242"]} // Light gradient
      start={{ x: 0.1, y: 0.2 }}
      end={{ x: 1, y: 1 }}
      style={[styles.card, style]}
    >
      {/* Card Header */}
      <View style={styles.cardHeader}>
        <Text style={styles.accountType}>{title}</Text>
        <Ionicons name="add" size={24} color="white" />
      </View>

      {/* Card Body */}
      <View style={styles.cardBody}>
        <Text style={styles.amount}>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(amount)}
        </Text>


              {/* Card Footer */}
      <View style={styles.cardFooter}>
        <Text style={styles.accountNumber}>Account {accountNumber}</Text>
        <Text style={styles.lastDigits}>{lastDigits}</Text>
        {icon && <Image source={icon} style={styles.cardIcon} />}
      </View>


      </View>

    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "90%",
    padding: 16,
    height: 200,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    justifyContent: "space-between",
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  accountType: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#FFF",
  },
  cardBody: {
    marginTop: 10,
  },
  amount: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 8,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  accountNumber: {
    fontSize: 14,
    color: "#ccc",
  },
  lastDigits: {
    fontSize: 14,
    color: "#CCC",
  },
  cardIcon: {
    width: 30,
    height: 20,
    resizeMode: "contain",
  },
});

export default GradientCard;