import { Stack } from "expo-router";
import AccountsTemplate from "@/components/templates/AccountsTemplate";

export default function Layout() {

  return (
    <AccountsTemplate title="BankTrack">
      <Stack
        screenOptions={{
          headerShown: false, // Disable Expo Router's default header
        }}
      />
    </AccountsTemplate>
  );
}
