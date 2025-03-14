import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import TransactionItem from "@/components/molecules/TransactionItem";
import { TransactionType } from "@/constants/transaction-types.enum";

const transactions = [
  { id: "1", name: "Ben Wayne", description: "Thanks for the dinner!", amount: "+$128.00", time: "1:22PM", type: TransactionType.gas, isIncome: true },
  { id: "2", name: "Carhartt", description: "Dubai Mall", amount: "$234.00", time: "12:45PM", type: TransactionType.food, isIncome: false },
  { id: "3", name: "Subscription", description: "Netflix", amount: "$18.00", time: "12:32PM", type: TransactionType.shopping, isIncome: false },
  { id: "4", name: "Damien Light", description: "You won!", amount: "$20.00", time: "12:22PM", type: TransactionType.transfer, isIncome: false },
];

interface TransactionsListProps {
    onExpandePressed: () => void;
}

const TransactionsList = ({ onExpandePressed }: TransactionsListProps) => {
    
  return (
    <View style={[
        styles.container,
    ]}>
        <View style={styles.expandedButtonContainer}>
            <TouchableOpacity style={styles.buttonContainer} onPress={onExpandePressed}>
            <View  style={styles.expandedButton} />
            </TouchableOpacity>
        </View>
      <Text style={styles.title}>Transactions</Text>
      <Text style={styles.today}>TODAY</Text>

      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TransactionItem
            name={item.name}
            description={item.description}
            amount={item.amount}
            time={item.time}
            type={item.type}
            isIncome={item.isIncome}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1C1C1E",
    paddingTop: 10,
    paddingLeft: 16,
    paddingRight: 16,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    height: '100%'
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  today: {
    color: "#888",
    fontSize: 14,
    marginBottom: 10,
  },
  expandedButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 1,
  },
  buttonContainer: {
    width: 80,
    height: 16, 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  expandedButton: {
    width: 40,
    height: 5,
    backgroundColor: '#474747',
    display: 'flex',
    borderRadius: 8,
  }
});

export default TransactionsList;