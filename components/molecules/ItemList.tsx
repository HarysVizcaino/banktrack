import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from "react-native";

interface Item {
  id: string;
  name: string;
  description: string;
  route: string;
  icon?: keyof typeof Ionicons.glyphMap;
}

interface ItemListProps {
  data: Item[];
  onItemPress: (id: string) => void;
}

const ItemList = ({ data, onItemPress }: ItemListProps) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.item} onPress={() => onItemPress(item.route)}>
            <Ionicons name={item.icon} size={24} color="white" style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        </TouchableOpacity>
      )}
      contentContainerStyle={styles.list}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 16,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1C1C1E",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    color: "#aaa",
    fontSize: 14,
  },
});

export default ItemList;