import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet, ViewStyle } from "react-native";
import { Colors } from "@/constants/Colors";

interface CardProps {
  title: string;
  amount: number;
  currency?: string;
  backgroundColor?: string;
  style?: ViewStyle;
}

const AccountCard = ({
  title,
  amount,
  currency = "USD",
  backgroundColor = "#007bff",
  style,
}: CardProps) => {
  return (
    <View testID="account-card" style={[styles.card, { backgroundColor }, style || {}]}>
      {/* Header */}
      <View style={styles.cardHeader}>
        <View>
          <Text style={styles.AccountType}>Wallet</Text>
        </View>
        <View>
          <Ionicons name="add" size={24} color="white" />
        </View>
      </View>

      {/* Footer */}
      <View style={styles.CardFooter}>
        <View>
          <Text style={styles.amount}>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency,
            }).format(amount)}
          </Text>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={{ alignItems: "flex-end", justifyContent: "flex-end" }}>
          <Ionicons name="card-outline" size={24} color={Colors.light.background} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "88%",
    padding: 16,
    height: 200,
    borderRadius: 12,
    alignItems: "center",
    marginVertical: 10,
  },
  cardHeader: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
  AccountType: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#fff", // Ensures text visibility
  },
  title: {
    fontSize: 16,
    color: "#fff",
    marginTop: 5,
  },
  amount: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 5,
  },
  CardFooter: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
  },
});

export default AccountCard;