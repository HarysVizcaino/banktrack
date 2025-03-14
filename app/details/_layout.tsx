import { Stack } from "expo-router";
import DetailsTemplate from "@/components/templates/DetailsTemplate";

export default function Layout() {

    const handleNavigation = (screen: string) => {
    alert(`Navigating to ${screen}`);
  };

  return (
    <DetailsTemplate title="BankTrack">
      <Stack
        screenOptions={{
          headerShown: false, // Disable Expo Router's default header
        }}
      />
    </DetailsTemplate>
  );
}
