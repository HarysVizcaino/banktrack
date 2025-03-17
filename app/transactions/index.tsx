import React from "react";
import { RelativePathString, useRouter } from "expo-router";
import { View, Alert } from "react-native";
import ItemList from "@/components/molecules/ItemList";
import i18n from "@/locales/i18n";

const sampleData = [
  { id: "1", 
    name: i18n.t('transferMoney'), 
    description: i18n.t('transferMoneyToAccount'), icon: "swap-horizontal-outline", 
    route: '/transactions/transfer' },
  { id: "2", 
    name: i18n.t('payServices'), 
    description: i18n.t('payServicesDescription'), 
    icon: "card-outline", 
    route: '/' },
  { 
    id: "3", 
    name: i18n.t('cash'), 
    description: i18n.t('withdrawOrDeposit'), 
    icon: "cash-outline", 
    route: '/' },
];

export default function TransactionsScreen() {
  const router = useRouter();

  const handleItemPress = (screen: string) => {
    router.push('/transactions/transfer' as RelativePathString);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#000", paddingTop: 20 }}>
      <ItemList data={sampleData} onItemPress={handleItemPress} />
    </View>
  );
}