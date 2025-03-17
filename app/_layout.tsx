import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/store";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, StyleSheet } from "react-native";
import React from "react";

export default function Layout() {

  return (
    <SafeAreaView style={styles.safeArea}>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <View style={styles.container}>
        <Stack screenOptions={{ headerShown: false }} />
      </View>
      </PersistGate>
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#000",
  },
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
