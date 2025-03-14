import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const SuccessAccountScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Success Icon */}
      <View style={styles.successIcon}>
        <Ionicons name="checkmark-circle-outline" size={80} color="white" />
      </View>

      {/* Success Message */}
      <Text style={styles.successText}>Account Requested Successfully!</Text>

      {/* Details */}
      <Text style={styles.details}>
        Your request has been submitted. Our team will review it and get back to you soon.
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
    textAlign: "center",
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

export default SuccessAccountScreen;