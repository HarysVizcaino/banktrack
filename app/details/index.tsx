import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import GradientCard from "@/components/atoms/GradientCard";
import SegmentedControl from "@/components/molecules/SegmentedControl";
import TransactionsList from "@/components/organisms/TransactionsList";

export default function DetailsScreen() {
    const [isExpanded, setExpanded] = useState(false);
    const handleSelection = () => {
      alert('Clicked')
    }

  return (
    <View style={styles.container}>
        <View style={styles.gradientContainer}>
        <GradientCard 
              title="Estamos aqui "
              amount={100}
              style={{ width: '100%' }}
            />
        </View>
        <View style={styles.segmentedContainer}>
        <SegmentedControl options={["Day", "Week", "Month", "Year"]} onSelect={handleSelection} />
        </View>
    <View style={[ 
      styles.transactionsContainer,
        {
          position: isExpanded ? 'absolute' : 'relative',
          zIndex: isExpanded ? 999999 : 1,
        }
       ]}>
      <TransactionsList onExpandePressed={() => {
          setExpanded(!isExpanded);
      }} />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: '#000'
  },
  gradientContainer: {
    width: '100%', 
    marginTop: 26, 
    padding: 16
  },
  segmentedContainer: { 
    marginTop: 28, 
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
     },
    transactionsContainer: {
        flex: 1, 
         width: '100%', 
         height: '100%',
         justifyContent: 'flex-end',
         paddingLeft: 8,
         paddingRight: 8,

    }
});