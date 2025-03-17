import React, { useRef } from "react";
import { RelativePathString, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import { View, StyleSheet, Dimensions, Text, TouchableOpacity } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import GradientCard from "../atoms/GradientCard";
import { Account, AccountList } from '../../types/accounts';
import { maskNumber } from "@/utils/mask-number";
import { ROUTES } from '../../constants/routes';

const { width } = Dimensions.get("window");


interface CardCarouselProps {
  accountList: AccountList
}

const CardCarousel = ({ accountList }: CardCarouselProps) => {
  const { t } = useTranslation();
  const isScrolling = useRef(false); 
  const router = useRouter();

  const handlePress = (item: Account) => {
    if (!isScrolling.current) {
      router.push({
        pathname: ROUTES.ACCOUNT_DETAIL as RelativePathString,
        params: { account: JSON.stringify(item) },
      });
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
        data={accountList}
        onScrollStart={() => (isScrolling.current = true)}
        onScrollEnd={() => (isScrolling.current = false)}
        scrollAnimationDuration={800}
        renderItem={({ item }) => (
          <TouchableOpacity activeOpacity={0.8} onPress={() => handlePress(item)}>
          <View style={styles.cardContainer}>
            <GradientCard 
              title={t(item.type)} 
              type={item.type}
              amount={item.amount} 
              accountNumber={item.accountNumber}
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
