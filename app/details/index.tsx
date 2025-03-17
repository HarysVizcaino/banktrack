import React, { useEffect, useState, useMemo } from "react";
import { useTransactions } from "@/hooks/useTransactions";
import { useDispatch } from "react-redux";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import GradientCard from "@/components/atoms/GradientCard";
import { useTranslation } from "react-i18next";
import SegmentedControl from "@/components/molecules/SegmentedControl";
import TransactionsList from "@/components/organisms/TransactionsList";
import { useLocalSearchParams } from "expo-router";

const TransactionTypeList =  ["all", "deposit", "withdrawal", "shopping"];

import { Account } from "@/types";
import { getAccountById } from "@/api";

export default function DetailsScreen() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { setTransactionFilter } = useTransactions();
  const { account } = useLocalSearchParams(); 
  const [selectedAccount, setSelectedAccount] = useState<Account | null>(null);
  const [loading, setLoading] = useState(true);

  const accountData: Account | null = useMemo(() => {
    return account ? JSON.parse(account as string) : null;
  }, [account]);

  useEffect(() => {
    if (accountData?.id) {
      getAccountById(Number(accountData.id))
        .then((data) => setSelectedAccount(data))
        .finally(() => setLoading(false));
    }
  }, [accountData]);


    const [isExpanded, setExpanded] = useState(false);

    const handleSelection = (filter: string, index: number) => {
      dispatch(setTransactionFilter(TransactionTypeList[index]))
    }

    
  return (
    <View style={styles.container}>
      {
       loading ?
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#fff" /> 
        </View>: (
          <>
        <View style={styles.gradientContainer}>
          {
            selectedAccount && (
              <GradientCard 
              title={t(selectedAccount.type)}
              amount={selectedAccount.amount}
              type={selectedAccount.type}
              accountNumber={selectedAccount.accountNumber}
              maskAccount={false}
              style={{ width: '100%' }}
            />
            )
          }

        </View>
        <View style={styles.segmentedContainer}>
        <SegmentedControl options={
          [
            t('all'), 
            t('deposit'), 
            t('withdrawal'),
            t('shopping')
             ]
        } onSelect={handleSelection} />
        </View>
    <View style={[ 
      styles.transactionsContainer,
        {
          position: isExpanded ? 'absolute' : 'relative',
          zIndex: isExpanded ? 999999 : 1,
        }
       ]}>
        {
          selectedAccount?.id && (
            <TransactionsList 
            accountId={selectedAccount?.id}
            isExpanded={isExpanded}
            onExpandePressed={() => {
                setExpanded(!isExpanded);
            }} />
          )
        }

    </View>
          </>
        )
      }

    </View>
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: '#000'
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradientContainer: {
    width: '100%', 
    marginTop: 26, 
    padding: 16
  },
  segmentedContainer: { 
    marginTop: 28, 
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
     },
    transactionsContainer: {
        flex: 1, 
         width: '100%', 
         height: '100%',
         justifyContent: 'flex-end',
         paddingLeft: 8,
         paddingRight: 8,

    }
});