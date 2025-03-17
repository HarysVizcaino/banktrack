import React from "react";
import { useTranslation } from "react-i18next";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import CustomHeader from "../molecules/CustomHeader";

interface TransactionsTemplateProps {
  title?: string;
  children: React.ReactNode;
  profileImage?: string;
  onProfilePress?: () => void;
}


const TransactionsTemplate = ({
  title = "Home",
  children,
}: TransactionsTemplateProps) => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
      <CustomHeader title={t('transactions')} onCalendarPress={() => alert("Open Calendar")} calendarVisible={false} />
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

export default TransactionsTemplate;
