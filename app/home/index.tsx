import React from "react";
import { View, StyleSheet, Text } from "react-native";
import AccountCard from "@/components/atoms/AccountCard";
import CardCarousel from "@/components/molecules/CardCarousel";
import { TipsAndServices } from "@/components/molecules/TipsAndServices";
import { WidgetsSection } from "@/components/molecules/WidgetsSection";
import { TransactionsAndCashBack } from "@/components/molecules/TransactionAndCash";
import AdvertisingCard from "@/components/molecules/AdvertisingCard";


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.carouseContainer}>
      <CardCarousel />
      </View>
      <View style={{ width: '100%', marginBottom: 26 }}>
        <TransactionsAndCashBack />
      </View>
      <View style={{ width: '100%' }}>
        <WidgetsSection />
      </View>
      <View style={{ marginTop: 26 }}>
      <AdvertisingCard
        title="Refer and Earn"
        description="Share a referral link to your friend and get rewarded"
        buttonText="Learn more"
        imageSource="https://img.freepik.com/free-vector/fresh-toothpaste-advertisement-realistic-style_52683-16163.jpg"
        onPress={() => alert("Learn More Clicked!")}
      />
      </View>
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
  carouseContainer: {},

});
