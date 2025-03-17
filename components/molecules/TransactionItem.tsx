import { TransactionType as constantTransactionType } from "@/constants/transaction-types.enum";

import { TransactionType } from "@/types/transactions";
import { formatFriendlyDate } from "@/utils/time-formatters";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

interface TransactionTypeIcon {
  id: constantTransactionType;
  name: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
}

const transactionTypesIcon: TransactionTypeIcon[] = [
  { id: constantTransactionType.withdrawal, name: "withdrawal", icon: "arrow-down-circle-outline", color: '#ff4c53'  },
  { id: constantTransactionType.deposit, name: "deposit", icon: "arrow-up-circle-outline", color: '#5bcb61' },
  { id: constantTransactionType.shopping, name: "Shopping", icon: "cart-outline", color: '#6f3bf4' },
  { id: constantTransactionType.internet, name: "Transfers", icon: "swap-horizontal-outline", color: '#ff4c53' },
  { id: constantTransactionType.gas, name: "Gas", icon: "car-outline", color: '#45c9f5' },
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
  const icon = transactionTypesIcon.find(icon => icon.id === type)
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
        <Text style={styles.time}>{formatFriendlyDate(time)}</Text>
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