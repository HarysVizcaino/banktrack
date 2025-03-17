import { Ionicons } from "@expo/vector-icons";

export const getAccountIcon = (accountType: string): keyof typeof Ionicons.glyphMap => {
  const icons: Record<string, keyof typeof Ionicons.glyphMap> = {
    checking: "card-outline",
    savings: "wallet-outline",
    independentAccount: "briefcase-outline",
    payrollAccount: "cash-outline",
  };

  return icons[accountType] || "help-circle-outline";
};