import React from "react";
import { useRouter } from "expo-router";
import { View, StyleSheet, SafeAreaView, Text, TouchableOpacity } from "react-native";
import LanguageSwitchButton from "@/components/molecules/LanguageSwitcher";
import { Ionicons } from "@expo/vector-icons";

interface HeaderTemplateProps {
  title?: string;
  children: React.ReactNode;
  showBackButton?: boolean;
}

const HeaderTemplate = ({ title, children, showBackButton }: HeaderTemplateProps) => {
    const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
      {showBackButton && (
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        )}
        <Text style={styles.headerText}>{title}</Text>
        <LanguageSwitchButton />
      </View>

      {/* Page Content */}
      <View style={styles.content}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#FFF",
    borderBottomWidth: 1,
    borderBottomColor: "#FFF",
  },
  backButton: {
    position: "absolute",
    left: 10,
    zIndex: 1,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  content: {
    flex: 1,
  },
});

export default HeaderTemplate;
