import { ROUTES } from "@/constants/routes";
import { selectAccount } from "@/store/accountSlice";
import { Account } from "@/types";
import { RelativePathString, useRouter } from "expo-router";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { useDispatch } from "react-redux";

interface AccountItemProps {
    item: Account
}

export default function AccountItem({ item }: AccountItemProps) {  
  const dispatch = useDispatch();
    const router = useRouter();
    
    return (
        <TouchableOpacity
        style={styles.accountCard}
        onPress={() => {
          dispatch(selectAccount(item))
          router.push({
            pathname: ROUTES.ACCOUNT_DETAIL as RelativePathString, 
            params: { account: JSON.stringify(item) } })
        }}
      >
        <Text style={styles.accountType}>{item.type.toUpperCase()}</Text>
        <Text style={styles.accountNumber}>** {item.accountNumber.slice(-4)}</Text>
        <Text style={styles.amount}>${item.amount.toLocaleString()}</Text>
      </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    accountCard: {
      backgroundColor: "#1E1E1E",
      padding: 16,
      borderRadius: 8,
      marginBottom: 10,
      shadowColor: "#000",
      shadowOpacity: 0.2,
      shadowRadius: 5,
    },
    accountType: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#FFD700",
    },
    accountNumber: {
      fontSize: 14,
      color: "#BBB",
      marginTop: 4,
    },
    amount: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#4CAF50",
      marginTop: 8,
    },
  });