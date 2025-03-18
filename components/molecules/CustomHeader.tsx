import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";


const getCurrentMonthYear = () => {
    const date = new Date();
    return date.toLocaleString("en-US", { month: "short", year: "numeric" });
  };


interface CustomHeaderProps {
  title: string;
  date?: string;
  onCalendarPress?: () => void;
  calendarVisible?: boolean;
}

const CustomHeader = ({ title, date, onCalendarPress, calendarVisible = true }: CustomHeaderProps) => {
  const router = useRouter();
const currentDate = getCurrentMonthYear();

  return (
    <View style={styles.header}>
      {/* Back Button */}
      <TouchableOpacity testID="back-button" style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="chevron-back" size={18} color="white" />
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>

      {/* Calendar Button */}
      {
        calendarVisible && (
          <TouchableOpacity testID="calendar-button" style={styles.calendarContainer} onPress={onCalendarPress}>
          <Ionicons name="calendar-outline" size={24} color="white" />
          <Text style={styles.dateText}>{date || currentDate}</Text>
        </TouchableOpacity>
        )
      }

    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#000",
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '100%'
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 15,
    marginLeft: 5,
    fontWeight: 'bold'
  },
  calendarContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  dateText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 5,
  },
});

export default CustomHeader;