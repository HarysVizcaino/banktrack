import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useTranslation } from "react-i18next";
import { Ionicons } from "@expo/vector-icons";
import TrainingCard from '../atoms/TrainingCard';


export const WidgetsSection = () => {
    const { t } = useTranslation();
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.wigetsButton}>
                     <Ionicons name="qr-code-outline" size={25} color="#FFF" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.wigetsButton}>
                     <Ionicons name="add" size={25} color="#FFF" />
                </TouchableOpacity>
            </View>
            <View style={styles.wigetsContainer}>
            <TrainingCard iconName="school-outline"  title={t('tipsAndTraining')}/>
            <TrainingCard  iconName="grid-outline" title={t('allServices')}/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 110,
        padding: 5,
    },
    wigetsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flex: 8
    },
    buttonContainer: {
        flex: 1,
        height: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    wigetsButton: {
        backgroundColor: '#1C1C1E',
        padding: 5,
        borderRadius: 16,
        height: 45,
        width: 45,
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        backgroundColor: 'blue',
        borderRadius: 10,
    }
});


