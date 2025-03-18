import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface CardWithTitleProps {
  title: string;
  subTitle?: string;
  children?: React.ReactNode;
}

const CardWithTitle = ({ title, subTitle, children }: CardWithTitleProps) => {
  return (
    <View testID="card-container" style={styles.card}>
        <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
        <View>
            {children}
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1C1C1E", 
    borderRadius: 16,
    padding: 10,
    alignItems: "flex-start",
    width: '48%',
    height: 110,
  },
  titleContainer: {
  },
  title: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 8,
    textAlign: "left",
  },
  subTitle: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "light",
    textAlign: "left",
  },
  text: {
    color: "#222",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 8,
    textAlign: "center",
  },
});

export default CardWithTitle;
