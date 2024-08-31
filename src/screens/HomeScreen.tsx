import React, { FC, useEffect } from 'react'
import { Button, FlatList, ScrollView, Text, View } from 'react-native'
import TopBar from '../components/organisms/TopBar'
import Item, { ItemProps } from '../components/atoms/Item'
import PlusSVG from '../components/atoms/PlusSVG'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getService, getToken } from '../utils/getService'
import { postService } from '../utils/postService'
interface Props {
    navigation: any
}
const HomeScreen: FC<Props> = () => {



    const navigation = useNavigation()
    const data = [{
        cat: 'mercado',
        name: 'arroz',
        gasto: true,
        id: 0
    }
    ]



    const renderItem = ({ item }: { item: any }) => (
        <View style={{ backgroundColor: 'red' }}  >
            <Text >{item.cat}</Text>
        </View>
    );

    const handleBoughtSubmit = () => {
        const gasto = {
            "description": "Gastos salud, gimnasio, medicos",
            "categoryId": 1,
            "date": "2024-08-23",
            "amount": 100.00,
            "userId": 1,
            "installments": 3,
            "cardId": 1
        }
        try {
            postService(gasto, 'bought')
        } catch (error) {

        }

    }

    return (
        <View style={{ width: 100 }}> {/* Asegura que ocupe toda la pantalla */}
            {/* <TopBar /> */}
            {/* <Text>Ultimos movimientos</Text> */}
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />


            <Button onPress={() => (handleBoughtSubmit())}>Agregar gasto</Button>
        </View >
    );

}

export default HomeScreen
