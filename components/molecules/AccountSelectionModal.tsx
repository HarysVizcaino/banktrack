import React from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet, FlatList } from "react-native";

interface Account {
  id: string;
  name: string;
  balance: string;
}

interface AccountSelectionModalProps {
  visible: boolean;
  accounts: Account[];
  onSelect: (account: Account) => void;
  onClose: () => void;
}

const AccountSelectionModal = ({ visible, accounts, onSelect, onClose }: AccountSelectionModalProps) => {
  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>Select an Account</Text>
          <FlatList
            data={accounts}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.accountItem} onPress={() => onSelect(item)}>
                <Text style={styles.accountName}>{item.name}</Text>
                <Text style={styles.accountBalance}>Balance: {item.balance}</Text>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "85%",
    backgroundColor: "#1C1C1E",
    padding: 20,
    borderRadius: 10,
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  accountItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#444",
  },
  accountName: {
    color: "white",
    fontSize: 16,
  },
  accountBalance: {
    color: "#aaa",
    fontSize: 14,
  },
  closeButton: {
    marginTop: 15,
    backgroundColor: "#333",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  closeText: {
    color: "white",
    fontSize: 16,
  },
});

export default AccountSelectionModal;