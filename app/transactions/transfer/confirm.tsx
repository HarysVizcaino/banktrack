import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter, useLocalSearchParams } from "expo-router";

const ConfirmationScreen = () => {
  const router = useRouter();
  const { fromAccount, recipient, amount, description } = useLocalSearchParams();

  const handleConfirm = () => {
    router.push({
      pathname: "/transactions/transfer/success",
      params: {
        recipient,
        amount,
      },
    });
  };

  return (
    <View style={styles.container}>

      {/* Transaction Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>From Account:</Text>
        <Text style={styles.value}>{fromAccount}</Text>

        <Text style={styles.label}>Recipient:</Text>
        <Text style={styles.value}>{recipient}</Text>

        <Text style={styles.label}>Amount:</Text>
        <Text style={styles.value}>${amount}</Text>

        <Text style={styles.label}>Description:</Text>
        <Text style={styles.value}>{description || "No description provided"}</Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.backButtonConfirm} onPress={() => router.back()}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontSize: 18,
    marginLeft: 10,
  },
  detailsContainer: {
    backgroundColor: "#1C1C1E",
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,
  },
  label: {
    color: "#aaa",
    fontSize: 14,
    marginTop: 10,
  },
  value: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  backButtonConfirm: {
    flex: 1,
    backgroundColor: "#555",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginRight: 10,
  },
  confirmButton: {
    flex: 1,
    backgroundColor: "#1E88E5",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ConfirmationScreen;