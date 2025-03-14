import { TransactionType } from "@/constants/transaction-types.enum";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

interface TransactionTypeIcon {
  id: TransactionType;
  name: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
}

const transactionTypesIcon: TransactionTypeIcon[] = [
  { id: TransactionType.gas, name: "Gas", icon: "car-outline", color: '#181818'  },
  { id: TransactionType.food, name: "Food", icon: "fast-food-outline", color: '#268dd7' },
  { id: TransactionType.shopping, name: "Shopping", icon: "cart-outline", color: '#6f3bf4' },
  { id: TransactionType.transfer, name: "Transfers", icon: "swap-horizontal-outline", color: '#ff4c53' },
];

interface TransactionItemProps {
  name: string;
  description: string;
  amount: string;
  time: string;
  type: TransactionType;
  isIncome?: boolean;
}

const getTransactionTypeIcon = (type: TransactionType) => {
  console.log(type);
  const icon = transactionTypesIcon.find(icon => icon.id === type)
  console.log('icon', icon);
  return (
    <View style={{ backgroundColor: icon?.color, borderRadius: 50, padding: 12, marginRight: 15, }}>
      <Ionicons name={icon?.icon || 'swap-horizontal-outline'} size={24} color="#FFF" />
    </View>
  );
}

const TransactionItem = ({ name, description, amount, time, type, isIncome = false }: TransactionItemProps) => {
  return (
    <View style={styles.container}>

      { getTransactionTypeIcon(type) }

      {/* Transaction Details */}
      <View style={styles.details}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>

      {/* Amount & Time */}
      <View style={styles.rightSection}>
        <Text style={[styles.amount, isIncome ? styles.income : styles.expense]}>{amount}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  details: {
    flex: 1,
  },
  name: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    color: "#aaa",
    fontSize: 14,
  },
  rightSection: {
    alignItems: "flex-end",
  },
  amount: {
    fontSize: 16,
    fontWeight: "bold",
  },
  income: {
    color: "#00C851",
  },
  expense: {
    color: "#fff",
  },
  time: {
    color: "#777",
    fontSize: 12,
  },
});

export default TransactionItem;