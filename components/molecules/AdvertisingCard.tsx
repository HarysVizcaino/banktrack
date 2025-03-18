import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

interface AdvertisingCardProps {
  title: string;
  description: string;
  buttonText: string;
  imageSource: string;
  onPress: () => void;
}

const AdvertisingCard = ({ title, description, buttonText, imageSource, onPress }: AdvertisingCardProps) => {
  return (
    <View style={styles.card}>
      {/* Left Section - Text */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>

      {/* Right Section - Image */}
      <Image testID="advertising-card-image" source={{ uri: imageSource }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#1C1C1E",
    borderRadius: 16,
    padding: 16,
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: 150,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    overflow: "hidden",
  },
  textContainer: {
    flex: 1,
    paddingRight: 10,
  },
  title: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    color: "#ddd",
    fontSize: 15,
    marginVertical: 5,
  },
  button: {
    backgroundColor: "#282828",
    paddingVertical: 9,
    paddingHorizontal: 18,
    borderRadius: 8,
    alignSelf: "flex-start",
    marginTop: 17
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
});

export default AdvertisingCard;
