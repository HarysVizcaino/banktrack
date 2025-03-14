import { Stack } from "expo-router";
import DetailsTemplate from "@/components/templates/DetailsTemplate";
import TransactionsTemplate from "@/components/templates/TransactionTemplate";

export default function Layout() {

  return (
    <TransactionsTemplate title="BankTrack">
      <Stack
        screenOptions={{
          headerShown: false, // Disable Expo Router's default header
        }}
      />
    </TransactionsTemplate>
  );
}
