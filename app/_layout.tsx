import { Provider, useDispatch } from "react-redux";
import { store } from "@/store";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, StyleSheet } from "react-native";
import React from "react";

export default function Layout() {

  return (
    <SafeAreaView style={styles.safeArea}>
      <Provider store={store}>
      <View style={styles.container}>
        <Stack screenOptions={{ headerShown: false }} />
      </View>
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#000", // Change as needed
  },
  container: {
    flex: 1,
    backgroundColor: "#000", // Change as needed
  },
});
