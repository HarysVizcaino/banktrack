import { RootState } from "@/store";
import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";

const FILTER_OPTIONS = ["All", "Deposit", "Withdrawal", "Shopping", "Transfer", "Utilities"];

const TransactionFilter = () => {
  const dispatch = useDispatch();
  const selectedFilter = useSelector((state: RootState) => state.transactions);
  const [selected, setSelected] = useState(selectedFilter);

  const handleFilterChange = (filter: string) => {
    // setSelected(filter);
    // dispatch(setTransactionFilter(filter));
  };

  return (
    <View style={styles.filterContainer}>
      <FlatList
        data={FILTER_OPTIONS}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.filterButton, selected === item && styles.activeFilter]}
            onPress={() => handleFilterChange(item)}
          >
            <Text style={selected === item ? styles.activeText : styles.filterText}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: "#1E1E1E",
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 8,
    borderRadius: 20,
    backgroundColor: "#333",
  },
  activeFilter: {
    backgroundColor: "#FFD700",
  },
  filterText: {
    color: "#FFF",
    fontSize: 14,
  },
  activeText: {
    color: "#000",
    fontWeight: "bold",
  },
});

export default TransactionFilter;