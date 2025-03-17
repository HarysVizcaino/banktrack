import { Stack } from "expo-router";
import ProfileTemplate from "@/components/templates/ProfileTemplate";

export default function Layout() {

  return (
    <ProfileTemplate title="BankTrack">
      <Stack
        screenOptions={{
          headerShown: false, // Disable Expo Router's default header
        }}
      />
    </ProfileTemplate>
  );
}
