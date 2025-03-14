import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useTranslation } from "react-i18next";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { InputWithLabel } from "@/components/atoms/InputWithLabel";

const RegisterScreen = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [phone, setPhone] = useState("");

  const handleRegister = () => {
    // if (!name || !id || !phone) {
    //   Alert.alert("Error", "Please fill all the fields.");
    //   return;
    // }
  
    router.push("/register/success");
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="white" />
          <Text style={styles.headerText}>{t('home')}</Text>
        </TouchableOpacity>
      </View>

      {/* Input Fields */}
        <InputWithLabel 
        label={t('fullName')}
         placeholder={t('enterYourName')}
         value={name} 
         onChangeText={setName}
          />

      <InputWithLabel 
        label="ID"
         placeholder={t('enterYourId')}
         value={id} 
         onChangeText={setId}
         inputProps={{
            keyboardType: "numeric"
         }}
          />
      <InputWithLabel 
        label={t('phoneNumber')}
         placeholder={t('enterYourPhoneNumber')}
         value={phone} 
         onChangeText={setPhone}
         inputProps={{
            keyboardType: "phone-pad"
         }}
          />
      {/* Request Account Button */}
      <TouchableOpacity style={styles.requestButton} onPress={handleRegister}>
        <Text style={styles.requestText}>Request Account</Text>
      </TouchableOpacity>
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
  input: {
    backgroundColor: "#1C1C1E",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 12,
    color: "white",
    fontSize: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#333",
  },
  requestButton: {
    backgroundColor: "#1E88E5",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  requestText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default RegisterScreen;