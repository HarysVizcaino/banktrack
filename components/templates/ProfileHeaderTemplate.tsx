import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

interface ProfileHeaderTemplateProps {
  title?: string;
  children: React.ReactNode;
  profileImage?: string;
  onProfilePress?: () => void;
}


const PROFILE = require('../../assets/images/profile.jpg');

const ProfileHeaderTemplate = ({
  title = "Home",
  children,
  profileImage = PROFILE, // Placeholder image
  onProfilePress,
}: ProfileHeaderTemplateProps) => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* Profile Picture */}
        <TouchableOpacity onPress={onProfilePress} style={styles.profileContainer}>
          <Image source={PROFILE} style={styles.profileImage} />
        </TouchableOpacity>

        {/* Title */}
        <Text style={styles.headerText}>{title}</Text>

        {/* Optional Right Action (Example: Settings) */}
        <TouchableOpacity onPress={() => router.push("/settings")}>
        <Ionicons name="notifications-outline" size={24} color="white" />

        </TouchableOpacity>
      </View>

      {/* Page Content */}
      <View style={styles.content}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#000',
  },
  profileContainer: {
    width: 40,
    height: 40,
    borderRadius: 25,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#fff",
  },
  profileImage: {
    width: "100%",
    height: "100%",
    borderRadius: 25,
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
    padding: 20,
  },
});

export default ProfileHeaderTemplate;
