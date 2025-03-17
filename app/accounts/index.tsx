import AccountItem from "@/components/atoms/AccountItem";
import { useTranslation } from "react-i18next";
import { RootState } from "@/store";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";

export default function AllAccountsScreen() { 
    const { t } = useTranslation();
    const { accounts, loading } = useSelector((state: RootState) => state.account);
  
    return (
            <View style={styles.container}>
              <Text style={styles.title}>{ t('allAccounts') }</Text>
        
              <FlatList
                data={accounts}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <AccountItem item={item} />
                )}
              />
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#121212", // Dark theme
      padding: 16,
    },
    title: {
      fontSize: 22,
      fontWeight: "bold",
      color: "#fff",
      marginBottom: 12,
    },
    loader: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    error: {
      color: "red",
      textAlign: "center",
    },
  });