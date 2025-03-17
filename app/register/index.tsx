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
import Message from "@/components/atoms/Message";


const RegisterSchema = Yup.object().shape({
  identification: Yup.string().required(i18n.t('fieldRequired')),
  email: Yup.string().email(i18n.t('invalidEmail')).required(i18n.t('fieldRequired')),
  password: Yup.string().min(6, i18n.t('tooShort')).required(i18n.t('fieldRequired')),
  fullName: Yup.string().required(i18n.t('fieldRequired')),
  phoneNumber: Yup.string().required(i18n.t('fieldRequired')),
});


const initialState = {
identification: "",
fullName: "", 
phoneNumber: "",
email: "",
password: "",
}

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
            initialValues={initialState}
            validationSchema={RegisterSchema}
            onSubmit={(values) => {
              signUp(
                values.fullName, 
                values.email, 
                values.password, 
                values.identification, 
                values.phoneNumber
              )
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
                        label={t('email')}
                        placeholder={t('enterYourEmail')}
                        value={values.email} 
                        onChangeText={handleChange("email")}
                        errorMessage={ errors.email ? t('fieldRequired') + ' or ' + t('invalidEmail')  : "" }
                        inputProps={{
                          keyboardType: "email-address",
                          autoCapitalize: "none",
                          autoCorrect: false,
                          textContentType: 'emailAddress'
                        }}
                        />
                      <InputWithLabel 
                              label="Identification"
                              placeholder={t('enterYourId')}
                              value={values.identification} 
                              onChangeText={handleChange("identification")}
                              inputProps={{
                                  keyboardType: "numeric"
                              }}
                              errorMessage={ errors.identification ? t('fieldRequired') : "" }
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
                            <InputWithLabel 
                                    label={t('password')}
                                    placeholder={t('enterYourPassword')}
                                    value={values.password} 
                                    onChangeText={handleChange("password")}
                                    inputProps={{
                                      secureTextEntry: true
                                    }}
                                    errorMessage={ errors.phoneNumber ? t('fieldRequired') : "" }
                                      />
                            {/* Request Account Button */}
                            { isError && <Message type="error" message={t('errorCreatingUser')} /> }
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