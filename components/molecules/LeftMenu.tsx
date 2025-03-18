import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { View, Text, TouchableOpacity, StyleSheet, Animated, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import LanguageSwitchButton from "./LanguageSwitcher";

const SCREEN_WIDTH = Dimensions.get("window").width;
interface LeftMenuPro {
  isOpen: boolean;
  onClose: () => void;
}

const LeftMenu = ({ isOpen, onClose }: LeftMenuPro) => {
  const { t } = useTranslation();

  const router = useRouter();
  const translateX = new Animated.Value(isOpen ? 0 : -SCREEN_WIDTH);

  // Animate the menu
  React.useEffect(() => {
    Animated.timing(translateX, {
      toValue: isOpen ? 0 : -SCREEN_WIDTH + -65,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isOpen]);

  return (
    <Animated.View style={[styles.menuContainer, { transform: [{ translateX }] }]}>
      <View style={styles.headerContainer}>
        <LanguageSwitchButton />
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Ionicons name="close" size={24} color="white" />
      </TouchableOpacity>
        </View>
     <View style={styles.itemContainer}>
              {/* Close Button */}

      {/* Menu Items */}
      <TouchableOpacity style={styles.menuItem} onPress={() => router.push("/home")}>
        <Ionicons name="home-outline" size={24} color="white" />
        <Text style={styles.menuText}>{t('home')}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => router.push("/transactions")}>
        <Ionicons name="swap-horizontal-outline" size={24} color="white" />
        <Text style={styles.menuText}>{t('transactions')}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => router.push("/profile")}>
        <Ionicons name="person-outline" size={24} color="white" />
        <Text style={styles.menuText}>{t('profile')}</Text>
      </TouchableOpacity>
     </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 10,
    width: SCREEN_WIDTH * 0.75,
    backgroundColor: '#1C1C1E',
    height: 60,
  },
  itemContainer: {
    width: SCREEN_WIDTH * 0.75,
    backgroundColor: '#1C1C1E',
    height: '100%',
    paddingLeft: 16,
  },
  menuContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: '120%', // 75% of screen width
    height: "105%",
    backgroundColor: "rgba(0,0,0,0.8)",
    paddingHorizontal: 20,
    zIndex: 1000,
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
  },
  menuText: {
    color: "white",
    fontSize: 16,
    marginLeft: 10,
  },
});

export default LeftMenu;