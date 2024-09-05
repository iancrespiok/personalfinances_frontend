import React, { FC } from 'react'
import { GestureResponderEvent, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { postService } from '../utils/postService'
import FlatListRender from '../components/organisms/FlatListRender'
import dataTest from '../utils/dataTest.json'


interface Props {
    navigation: any
}
const HomeScreen: FC<Props> = () => {

    const navigation = useNavigation()

    // const handleBoughtSubmit = (event: GestureResponderEvent): void => {
    //     const spent = {
    //         "description": "Gastos salud, gimnasio, medicos",
    //         "categoryId": 1,
    //         "date": "2024-08-23",
    //         "amount": 100.00,
    //         "userId": 1,
    //         "installments": 3,
    //         "cardId": 1
    //     }
    //     try {
    //         postService(spent, 'bought')
    //     } catch (error) {
    //         throw new Error("Error in handleBoughtSubmit");
    //     }

    // }

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <Text style={styles.title}>Transaction History</Text>
                <TouchableOpacity>
                    <Text style={styles.buttonSeeAll}>See All</Text>
                </TouchableOpacity>
            </View>
            <FlatListRender
                dataRender={dataTest}
            />
            {/* <Button onPress={handleBoughtSubmit}>Agregar gasto</Button> */}
        </View >
    );

}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        width: 500,
        backgroundColor: 'gray',
    },
    topBar: {
        flex: 1,
        margin:10,
        flexDirection:'row',
        justifyContent: 'space-between',
        
    },
    title: {

    },
    buttonSeeAll: {

    },
})
