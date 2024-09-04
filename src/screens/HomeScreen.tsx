import React, { FC, useEffect } from 'react'
import { Button, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { getService } from '../utils/getService'
import getToken from '../utils/getToken'
import { postService } from '../utils/postService'
import FlatListRender from '../components/organisms/FlatListRender'

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
            <FlatListRender
                dataRender={data}
            />
            <Button onPress={() => (handleBoughtSubmit())}>Agregar gasto</Button>
        </View >
    );

}

export default HomeScreen
