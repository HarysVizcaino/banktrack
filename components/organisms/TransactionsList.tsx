import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import TransactionItem from "@/components/molecules/TransactionItem";
import SegmentedControl from "../molecules/SegmentedControl";
import { useTransactions } from "@/hooks/useTransactions";


const TransactionTypeList =  ["all", "deposit", "withdrawal", "shopping"];
interface TransactionsListProps {
    onExpandePressed: () => void;
    accountId: string;
    isExpanded: boolean;
}

const TransactionsList = ({ onExpandePressed, accountId, isExpanded }: TransactionsListProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { transactions, loading, setTransactionFilter } = useTransactions();

  const handleFilter = (filter: string, index: number) => {
    dispatch(setTransactionFilter(TransactionTypeList[index]))
  }

  return (
    <View style={[
        styles.container,
    ]}>
        <View style={styles.expandedButtonContainer}>
            <TouchableOpacity style={styles.buttonContainer} onPress={onExpandePressed}>
            <View  style={styles.expandedButton} />
            </TouchableOpacity>
        </View>

        {isExpanded && (
          <View style={styles.filterContainer}>
          <Text style={styles.filterTitle}>{t('filterBy')}: </Text>
          <SegmentedControl options={[
            t('all'), 
            t('deposit'), 
            t('withdrawal'),
            t('shopping')
             ]} onSelect={handleFilter} />
        </View>
        )}

      <Text style={styles.title}>{t('transactions')}</Text>
      <Text style={styles.today}>{t('today')}</Text>

      {
        
        transactions && (
          <FlatList
          data={transactions}
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
  },
  filterContainer: {
    marginBottom: 32,
  },
  filterTitle: {
    color: '#FFF',
    fontSize: 14,
    marginBottom: 12,
  }
});

export default TransactionsList;