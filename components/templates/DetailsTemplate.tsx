import React, { useEffect } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { Colors } from "@/constants/Colors";
import CustomHeader from "../molecules/CustomHeader";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loadLanguage } from "@/store/languageSlice";

interface DetailsTemplateProps {
  title?: string;
  children: React.ReactNode;
  profileImage?: string;
  onProfilePress?: () => void;
}

const DetailsTemplate = ({
  children,
}: DetailsTemplateProps) => {

    useEffect(() => {
      AsyncStorage.getItem("appLanguage").then((lang) => {
        if (lang) dispatch(loadLanguage(lang));
      });
    }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
      <CustomHeader title="Home" onCalendarPress={() => alert("Open Calendar")} />
      </View>

      {/* Page Content */}
      <View style={styles.content}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: '#000',
  },

  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: 'white',
    flex: 1,
    textAlign: "center",
  },
  content: {
    flex: 1,
  },
});

export default DetailsTemplate;
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}

