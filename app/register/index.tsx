import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { InputWithLabel } from "@/components/atoms/InputWithLabel";
import i18n from "@/locales/i18n";
import { useAuth } from "@/hooks/useAuth";


const RegisterSchema = Yup.object().shape({
  fullName: Yup.string().required(i18n.t('fieldRequired')),
  id: Yup.string().required(i18n.t('fieldRequired')),
  phoneNumber: Yup.string().required(i18n.t('fieldRequired')),
});

const RegisterScreen = () => {
  const { signUp, loading, isError } = useAuth();

  const router = useRouter();
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="white" />
          <Text style={styles.headerText}>{t('home')}</Text>
        </TouchableOpacity>
      </View>
          <Formik
            initialValues={{ fullName: "", id: "", phoneNumber: "" }}
            validationSchema={RegisterSchema}
            onSubmit={(values) => {
              console.log(values);
              // signIn(values.email, values.password);
              signUp(values.fullName, values.id, values.phoneNumber)
            }}
          >
            {({ handleChange, handleSubmit, values, errors }) => ( 
                <>
                      {/* Input Fields */}
                      <InputWithLabel 
                      label={t('fullName')}
                      placeholder={t('enterYourName')}
                      value={values.fullName} 
                      onChangeText={handleChange("fullName")}
                      errorMessage={ errors.fullName ? t('fieldRequired') : "" }
                        />

                      <InputWithLabel 
                              label="ID"
                              placeholder={t('enterYourId')}
                              value={values.id} 
                              onChangeText={handleChange("id")}
                              inputProps={{
                                  keyboardType: "numeric"
                              }}
                              errorMessage={ errors.id ? t('fieldRequired') : "" }
                                />

                            <InputWithLabel 
                                    label={t('phoneNumber')}
                                    placeholder={t('enterYourPhoneNumber')}
                                    value={values.phoneNumber} 
                                    onChangeText={handleChange("phoneNumber")}
                                    inputProps={{
                                        keyboardType: "phone-pad"
                                    }}
                                    errorMessage={ errors.phoneNumber ? t('fieldRequired') : "" }
                                      />

                            {/* Request Account Button */}
                            <TouchableOpacity style={styles.requestButton} onPress={handleSubmit as any}>
                             { loading ? <Text>{t('loading')}</Text> : <Text style={styles.requestText}>{t('requestAndAccount')}</Text> } 
                            </TouchableOpacity>
                </>
            )}
          </Formik>
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