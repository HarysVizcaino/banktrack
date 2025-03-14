import { View, StyleSheet, Text } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { Card } from '../atoms/Card';
import TrainingCard from '../atoms/TrainingCard';


export const TipsAndServices = () => {
    return (
        <View style={styles.container}>
            <TrainingCard  title='Tips and Training'/>
            <TrainingCard  title='All services'/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        height: 110,
        padding: 5
    },
    card: {
        backgroundColor: 'blue',
        borderRadius: 10,
    }
});


