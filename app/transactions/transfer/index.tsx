import React, { useEffect, useState } from "react";
import { useAccounts } from "@/hooks/useAccounts";
import { useTranslation } from "react-i18next";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import AccountSelectionModal from "@/components/molecules/AccountSelectionModal";
import BeneficiarySelectionModal from "@/components/molecules/BeneficiaryModal";
import { Account } from "@/types";
import { useBeneficiary } from "@/hooks/useBeneficiary";
import { Beneficiary } from "@/types/beneficiary";
import { getBeneficiaries } from "@/api/beneficiary";
import i18n from "@/locales/i18n";

const TransferScreen = () => {
  const router = useRouter();
  const { accounts, loading } = useAccounts();
  const { t } = useTranslation();
  const [selectedAccount, setSelectedAccount] = useState<string | null>(null);
  const [modalAccountVisible, setModalAccountVisible] = useState(false);
  const [modalBeneficiaryVisible, setModalBeneficiaryVisible] = useState(false);
  const [fromAccount, setFromAccount] = useState<Account | null>(null);
  const [recipient, setRecipient] = useState<Beneficiary | null>(null);
  const [beneficiariesList, setBeneficiarieslist] = useState<Beneficiary[] | null>(null)
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const handleSelectAccount = (account: Account) => {
    setFromAccount(account);
    setModalAccountVisible(false);
  };

  const handleSelectBeneficiary = (account: Beneficiary) => {
    setRecipient(account);
    setModalBeneficiaryVisible(false);
  };

  const handleTransfer = () => {
    if (!fromAccount || !recipient || !amount) {
      Alert.alert("Error", i18n.t('fillAllfields'));
      return;
    }
  
    router.push({
      pathname: "/transactions/transfer/confirm",
      params: {
        fromAccount: JSON.stringify(fromAccount),
        recipient: JSON.stringify(recipient),
        amount,
        description,
      },
    });
  };

  useEffect(() => {
    const fetchUser = async () => {
      const response = await getBeneficiaries();
      setBeneficiarieslist(response);
    }

    fetchUser();
  }, []);

  return (
    <View style={styles.container}>

      {/* Select Account */}
      <Text style={styles.label}>{t('selectAccount')}</Text>
      <TouchableOpacity style={styles.selectBox} onPress={() => setModalAccountVisible(true)}>
        <Ionicons name="wallet-outline" size={20} color="gray" style={styles.icon} />
        <Text style={styles.selectText}>{ fromAccount ?  `${t(fromAccount.type)} | RD: ${fromAccount.amount}` : t('chooAnAccount')}</Text>
      </TouchableOpacity>

      {/* Select Recipient */}

      <Text style={styles.label}>{t('recipient')}</Text>
      <TouchableOpacity style={styles.selectBox} onPress={() => setModalBeneficiaryVisible(true)}>
        <Ionicons name="person-outline" size={20} color="gray" style={styles.icon} />
        <Text style={styles.selectText}>{ recipient?.fullName || t('chooseARecipient')}</Text>
      </TouchableOpacity>

      {/* Amount Input */}
      <Text style={styles.label}>{t('amount')}</Text>
      <TextInput
        style={styles.input}
        placeholder={t('enterAmount')}
        placeholderTextColor="gray"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />

      {/* Description Input */}
      <Text style={styles.label}>{t('descriptionTransfer')}</Text>
      <TextInput
        style={styles.input}
        placeholder={t('enterDescripcion')}
        placeholderTextColor="gray"
        value={description}
        onChangeText={setDescription}
      />

      {/* Submit Button */}
      <TouchableOpacity style={styles.sendButton} onPress={handleTransfer}>
        <Text style={styles.sendButtonText}>{t('transferMoney')}</Text>
      </TouchableOpacity>

      {/* Account Selection Modal */}
        <AccountSelectionModal
        visible={modalAccountVisible}
        accounts={accounts}
        onSelect={handleSelectAccount}
        onClose={() => setModalAccountVisible(false)}
      />

    {
      beneficiariesList && (
        <BeneficiarySelectionModal 
        visible={modalBeneficiaryVisible}
        beneficiaries={beneficiariesList}
        onSelect={handleSelectBeneficiary}
        onClose={() => setModalBeneficiaryVisible(false)}
/>
      )
    }
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