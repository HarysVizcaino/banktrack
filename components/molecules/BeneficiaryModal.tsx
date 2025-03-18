import { Account } from "@/types";
import { Beneficiary } from "@/types/beneficiary";
import React from "react";
import { useTranslation } from "react-i18next";
import { View, Text, TouchableOpacity, Modal, StyleSheet, FlatList } from "react-native";

interface BeneficiarySelectionModalProps {
  visible: boolean;
  beneficiaries: Beneficiary[];
  onSelect: (beneficiary: Beneficiary) => void;
  onClose: () => void;
}

const BeneficiarySelectionModal = ({ visible, beneficiaries, onSelect, onClose }: BeneficiarySelectionModalProps) => {
  const { t } = useTranslation();
  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>SELECT ANYTHING</Text>
          <FlatList
            data={beneficiaries}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.accountItem} onPress={() => onSelect(item)}>
                <Text style={styles.accountName}>{item.fullName}</Text>
                <Text style={styles.accountBalance}>{t('account')}: {item.accountNumber}</Text>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity testID="close-button" style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeText}>{t('close')}</Text>
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

export default BeneficiarySelectionModal;