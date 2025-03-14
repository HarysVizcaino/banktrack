import React, { useRef } from "react";
import { useRouter } from "expo-router";
import { View, StyleSheet, Dimensions, Text, TouchableOpacity } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import GradientCard from "../atoms/GradientCard";

const { width } = Dimensions.get("window");

const data = [
  { id: 1, title: "Debit", amount: 1250.75 },
  { id: 2, title: "Credit", amount: 5000, backgroundColor: "green" },
  { id: 3, title: "Debit", amount: -1200.5, backgroundColor: "red" },
];

const CardCarousel = () => {
  const isScrolling = useRef(false); 
  const router = useRouter();

  const handlePress = (item) => {
    if (!isScrolling.current) {
      router.push("/details");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
      <Text style={styles.title}>Accounts</Text>
      </View>
      <Carousel
        loop
        width={width}
        height={220} // Match card height
        data={data}
        onScrollStart={() => (isScrolling.current = true)}
        onScrollEnd={() => (isScrolling.current = false)}
        scrollAnimationDuration={800}
        renderItem={({ item }) => (
          <TouchableOpacity activeOpacity={0.8} onPress={() => handlePress(item)}>
          <View style={styles.cardContainer}>
            <GradientCard 
              title={item.title} 
              amount={item.amount} 
            />
          </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    width: '88%',
    marginBottom: 10
  },
  title: {
    fontSize: 18
  },
  cardContainer: {
    alignItems: "center",
    height: 220,
  },
});

export default CardCarousel
