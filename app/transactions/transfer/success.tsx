import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter, useLocalSearchParams } from "expo-router";

const SuccessScreen = () => {
  const router = useRouter();
  const { recipient, amount } = useLocalSearchParams();

  useEffect(() => {
    // You could trigger a success animation here if needed
  }, []);

  return (
    <View style={styles.container}>
      {/* Success Icon */}
      <View style={styles.successIcon}>
        <Ionicons name="checkmark-circle-outline" size={80} color="white" />
      </View>

      {/* Success Message */}
      <Text style={styles.successText}>Transaction Successful!</Text>

      {/* Transaction Details */}
      <Text style={styles.details}>
        You have successfully sent ${amount} to {recipient}.
      </Text>

      {/* Back to Home Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.push("/home")}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    padding: 20,
  },
  successIcon: {
    marginBottom: 20,
  },
  successText: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  details: {
    color: "#aaa",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
  },
  backButton: {
    backgroundColor: "#1E88E5",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SuccessScreen;