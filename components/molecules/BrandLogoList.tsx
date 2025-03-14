import React from "react";
import { View, Image, FlatList, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

interface BrandLogoListProps {
  logos: {
    id: number;
    uri: string;
    color: string;
  }[]
}

const START_LOGO_POSITION = 5;

const BrandLogoList = ({ logos }: BrandLogoListProps) => {
  return (
    <View style={styles.list}>
      {logos.map(({ uri, color }, index) => (
        <View
          key={index}
          style={[styles.logoContainer, { left: START_LOGO_POSITION + index * 30, backgroundColor: color }]}
        >
          <Image source={{ uri }} style={styles.logo} />
        </View>
      ))}
    </View>
  );
};


const styles = StyleSheet.create({
  list: {
    flexDirection: 'row'
  },
  logoContainer: {
    marginHorizontal: 5,
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: 42,
    height: 42
  },
  logo: {
    width: 25,
    height: 25,
  },
});

export default BrandLogoList;