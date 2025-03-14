import React from "react";
import { RelativePathString, useRouter } from "expo-router";
import { View, Alert } from "react-native";
import ItemList from "@/components/molecules/ItemList";

const sampleData = [
  { id: "1", name: "Transfer money", description: "Transfer money to another account", icon: "swap-horizontal-outline", route: '/transactions/transfer' },
  { id: "2", name: "Pay services", description: "Pay for utilities, subscriptions, etc.", icon: "card-outline", route: '/' },
  { id: "3", name: "Cash", description: "Withdraw or deposit cash", icon: "cash-outline", route: '/' },
];

export default function TransactionsScreen() {
  const router = useRouter();

  const handleItemPress = (screen: string) => {
    console.log(screen);
    router.push('/transactions/transfer' as RelativePathString);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#000", paddingTop: 20 }}>
      <ItemList data={sampleData} onItemPress={handleItemPress} />
    </View>
  );
}