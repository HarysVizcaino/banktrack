import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import AccountSelectionModal from "@/components/molecules/AccountSelectionModal";

const TransferScreen = () => {
  const router = useRouter();
  const [selectedAccount, setSelectedAccount] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [fromAccount, setFromAccount] = useState("");
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");


  const accounts = [
    { id: "1", name: "Checking Account", balance: "$5,000" },
    { id: "2", name: "Savings Account", balance: "$12,000" },
  ];

  const handleSelectAccount = (account) => {
    setSelectedAccount(account.name);
    setModalVisible(false);
  };

  const handleTransfer = () => {
    // if (!fromAccount || !recipient || !amount) {
    //   Alert.alert("Error", "Please fill all required fields.");
    //   return;
    // }
  
    router.push({
      pathname: "/transactions/transfer/confirm",
      params: {
        fromAccount,
        recipient,
        amount,
        description,
      },
    });
  };

  return (
    <View style={styles.container}>

      {/* Select Account */}
      <Text style={styles.label}>Select Account</Text>
      <TouchableOpacity style={styles.selectBox} onPress={() => setModalVisible(true)}>
        <Ionicons name="wallet-outline" size={20} color="gray" style={styles.icon} />
        <Text style={styles.selectText}>{fromAccount || "Choose an account"}</Text>
      </TouchableOpacity>

      {/* Select Recipient */}

            <Text style={styles.label}>Recipient</Text>
      <TouchableOpacity style={styles.selectBox} onPress={() => setModalVisible(true)}>
        <Ionicons name="person-outline" size={20} color="gray" style={styles.icon} />
        <Text style={styles.selectText}>{fromAccount || "Choose a recipient"}</Text>
      </TouchableOpacity>

      {/* Amount Input */}
      <Text style={styles.label}>Amount</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter amount"
        placeholderTextColor="gray"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />

      {/* Description Input */}
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter description (optional)"
        placeholderTextColor="gray"
        value={description}
        onChangeText={setDescription}
      />

      {/* Submit Button */}
      <TouchableOpacity style={styles.sendButton} onPress={handleTransfer}>
        <Text style={styles.sendButtonText}>Transfer Money</Text>
      </TouchableOpacity>

            {/* Account Selection Modal */}
        <AccountSelectionModal
        visible={modalVisible}
        accounts={accounts}
        onSelect={handleSelectAccount}
        onClose={() => setModalVisible(false)}
      />
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
  label: {
    color: "white",
    fontSize: 16,
    marginTop: 15,
    marginBottom: 5,
  },
  selectBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1C1C1E",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 15,
  },
  selectText: {
    color: "gray",
    fontSize: 16,
    marginLeft: 10,
  },
  input: {
    backgroundColor: "#1C1C1E",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 12,
    color: "white",
    fontSize: 16,
    marginBottom: 15,
  },
  sendButton: {
    backgroundColor: "#1E88E5",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  sendButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default TransferScreen;