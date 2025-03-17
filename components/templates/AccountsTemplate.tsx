import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import CustomHeader from "../molecules/CustomHeader";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loadLanguage } from "@/store/languageSlice";
import ProtectedRoute from "../ProtectedRoute";

interface DetailsTemplateProps {
  title?: string;
  children: React.ReactNode;
  profileImage?: string;
  onProfilePress?: () => void;
}


const PROFILE = require('../../assets/images/profile.jpg');

const AccountsTemplate = ({
  title = "Home",
  children,
}: DetailsTemplateProps) => {

  const dispatch = useDispatch();
  useEffect(() => {
    AsyncStorage.getItem("appLanguage").then((lang) => {
      if (lang) dispatch(loadLanguage(lang));
    });
  }, []);
  

  return (
    <SafeAreaView style={styles.container}>
      <ProtectedRoute>
      {/* Header */}
      <View style={styles.header}>
      <CustomHeader title="Home" calendarVisible={false}  />
      </View>

      {/* Page Content */}
      <View style={styles.content}>{children}</View>
      </ProtectedRoute>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: '#000',
  },

  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: 'white',
    flex: 1,
    textAlign: "center",
  },
  content: {
    flex: 1,
  },
});

export default AccountsTemplate;
