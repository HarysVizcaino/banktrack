import { InputWithLabel } from "@/components/atoms/InputWithLabel";
import { useTranslation } from "react-i18next";
import { RootState } from "@/store";
import { useFormik } from "formik";
import { View, Text, StyleSheet, TextInput, Button } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { useRouter } from "expo-router";


const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Full Name is required"),
    identification: Yup.string().required("Identification is required"),
    phoneNumber: Yup.string()
      .matches(/^\d{10}$/, "Phone number must be 10 digits")
      .required("Phone Number is required"),
  });

const UserProfile = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const { user } = useSelector((state: RootState) => state.auth);
    const formik = useFormik({
        initialValues: {
          fullName: user?.fullName || "",
          identification: user?.identification || "",
          phoneNumber: user?.phoneNumber || "",
        },
        validationSchema,
        onSubmit: (values) => {
            router.back();
        },
      });
      
      return (
        <View style={styles.container}>
          <Text style={styles.title}>{t('updateProfile')}</Text>
            <InputWithLabel 
            label={t('fullName')}
            placeholder={t('enterYourName')}
            value={formik.values.fullName} 
            onChangeText={formik.handleChange("fullName")}
            errorMessage={ formik.errors.fullName ? t('fieldRequired') : "" }
              />
            <InputWithLabel 
            label={t('identification')}
            placeholder={t('enterYourId')}
            value={formik.values.identification} 
            onChangeText={formik.handleChange("identification")}
            errorMessage={ formik.errors.fullName ? t('fieldRequired') : "" }
              />  

            <InputWithLabel 
            label={t('phoneNumber')}
            placeholder={t('enterYourPhoneNumber')}
            value={formik.values.identification} 
            onChangeText={formik.handleChange("phoneNumber")}
            errorMessage={ formik.errors.fullName ? t('fieldRequired') : "" }
              />  
    
          <Button title={t('updateProfile')} onPress={formik.handleSubmit as any} />
        </View>
      );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: "#000", // Dark theme
    },
    title: {
      fontSize: 22,
      fontWeight: "bold",
      color: "#fff",
      marginBottom: 20,
    },
    input: {
      backgroundColor: "#1E1E1E",
      color: "#fff",
      padding: 10,
      marginBottom: 10,
      borderRadius: 5,
      borderColor: "#FFD700",
      borderWidth: 1,
    },
    error: {
      color: "red",
      fontSize: 12,
      marginBottom: 10,
    },
  });

export default UserProfile;