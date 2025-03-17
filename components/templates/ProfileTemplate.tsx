import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import CustomHeader from "../molecules/CustomHeader";

interface DetailsTemplateProps {
  title?: string;
  children: React.ReactNode;
  profileImage?: string;
  onProfilePress?: () => void;
}


const ProfileTemplate = ({
  title = "Home",
  children,
  onProfilePress,
}: DetailsTemplateProps) => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
      <CustomHeader title="Home" calendarVisible={false}  />
      </View>

      {/* Page Content */}
      <View style={styles.content}>{children}</View>
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

export default ProfileTemplate;
