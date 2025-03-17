import React, { useMemo } from "react";

import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useTranslation } from "react-i18next";
import { useRouter, useLocalSearchParams } from "expo-router";
import { Account } from "@/types";
import { Beneficiary } from "@/types/beneficiary";


const getLastFourDigits = (number: number | string): string => {
  return number.toString().slice(-4);
};


const ConfirmationScreen = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { fromAccount, recipient, amount, description } = useLocalSearchParams();

    const formattedAccount: Account | null = useMemo(() => {
      return fromAccount ? JSON.parse(fromAccount as string) : null;
    }, [fromAccount]);

    const formattedBeneficiary: Beneficiary | null = useMemo(() => {
      return recipient ? JSON.parse(recipient as string) : null;
    }, [recipient]);

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
        <Text style={styles.label}>{t('fromAccount')}:</Text>
        <Text style={styles.value}>{`${t(formattedAccount?.type || '')} | ${getLastFourDigits(formattedAccount?.accountNumber || '')}`}</Text>

        <Text style={styles.label}>{t('recipient')}:</Text>
        <Text style={styles.value}>{formattedBeneficiary?.fullName}</Text>

        <Text style={styles.label}>{t('amount')}:</Text>
        <Text style={styles.value}>${amount}</Text>

        <Text style={styles.label}>{t('descriptionTransfer')}:</Text>
        <Text style={styles.value}>{description || "No description provided"}</Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.backButtonConfirm} onPress={() => router.back()}>
          <Text style={styles.buttonText}>{t('back')}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
          <Text style={styles.buttonText}>{t('confirm')}</Text>
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