import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import TransactionItem from "@/components/molecules/TransactionItem";
import { TransactionType } from "@/constants/transaction-types.enum";
import { getTransactionsByAccountId } from "@/api";
import { Transaction } from "@/types/transactions";

interface TransactionsListProps {
    onExpandePressed: () => void;
    accountId: string;
}

const TransactionsList = ({ onExpandePressed, accountId }: TransactionsListProps) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [transactionsList, setTransactionsList] = useState<Transaction[] | null>(null);
  useEffect(() => {
    getTransactionsByAccountId(Number(accountId))
    .then((data) => setTransactionsList(data))
    .catch(() => setTransactionsList([])) 
    .finally(() => setLoading(false))
  }, [accountId])

  return (
    <View style={[
        styles.container,
    ]}>
        <View style={styles.expandedButtonContainer}>
            <TouchableOpacity style={styles.buttonContainer} onPress={onExpandePressed}>
            <View  style={styles.expandedButton} />
            </TouchableOpacity>
        </View>
      <Text style={styles.title}>{t('transactions')}</Text>
      <Text style={styles.today}>{t('today')}</Text>

      {
        transactionsList && (
          <FlatList
          data={transactionsList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TransactionItem
              name={item.type}
              description={item.description}
              amount={String(item.amount)}
              time={item.createdAt}
              type={item.type}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
        )
      }

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