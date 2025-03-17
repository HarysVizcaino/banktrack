import { RelativePathString, Stack } from "expo-router";
import LeftMenu from "@/components/molecules/LeftMenu";
import { useRouter } from "expo-router";
import ProfileHeaderTemplate from "@/components/templates/ProfileHeaderTemplate";
import FloatingMenu from "@/components/molecules/FloatingMenu";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import useAppInactiveHandler from "@/hooks/useAppInactiveHandler";

export default function Layout() {
  const { handleSignOut } = useAuth();
    useAppInactiveHandler(handleSignOut, 300);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
    const handleNavigation = (screen: string) => {
    router.push(`/${screen}` as RelativePathString);
  };

  return (
    <ProfileHeaderTemplate 
    title="BankTrack" 
    onProfilePress={() => { 
      setIsMenuOpen(true) 
      }}>
      <Stack
        screenOptions={{
          headerShown: false, // Disable Expo Router's default header
        }}
      />
      <FloatingMenu onPress={handleNavigation} />
      <LeftMenu isOpen={isMenuOpen} onClose={() => { setIsMenuOpen(false) }} />
    </ProfileHeaderTemplate>
  );
}
