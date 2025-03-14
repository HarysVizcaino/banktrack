import { View, StyleSheet, Text } from 'react-native';
import CardWithTitle from '../atoms/CardWithTitle';
import BrandLogoList from './BrandLogoList';


export const TransactionsAndCashBack = () => {
    return (
        <View style={styles.container}>
            <CardWithTitle  title='Transactions' subTitle='Spent in october'/>
            <CardWithTitle  
            title='Cashback'
            >
                <BrandLogoList 
                logos={
                    [
                        {
                            id: 1, 
                            uri: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/be47a818545515.562cb4045b033.png',
                            color: 'rgb(39 140 219)'
                        },
                        {
                            id: 1, 
                            uri: 'https://cdn-icons-png.flaticon.com/512/5977/5977588.png',
                            color: '#f90004'
                        },
                        {
                            id: 1, 
                            uri: 'https://www.pngmart.com/files/23/Amazon-Icon-PNG-Image.png',
                            color: 'black'
                        },
                        {
                            id: 1, 
                            uri: 'https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_White.png',
                            color: '#04a663'
                        }
                    ]
                } 
                />
                </CardWithTitle>
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


