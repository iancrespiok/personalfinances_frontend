import React, { FC, useEffect } from 'react'
import { FlatList, ScrollView, Text, View } from 'react-native'
import TopBar from '../components/organisms/TopBar'
import Item, { ItemProps } from '../components/atoms/Item'
import PlusSVG from '../components/atoms/PlusSVG'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getService, getToken } from '../utils/getService'
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
    },
    {
        cat: 'alquiler',
        name: 'expesas',
        gasto: true,
        id: 1
    },
    {
        cat: 'salud',
        name: 'gym',
        gasto: true,
        id: 2
    }
        , {
        cat: 'sueldo',
        name: 'dinero',
        gasto: false,
        id: 3
    }
    ]


    useEffect(() => {
        navigation.navigate('Login')
        // if (!getToken())
        //     navigation.navigate('Login')
        // else {
        //     console.log('asasdas')
        //     getService()
        // }
    }, [navigation])

    const renderItem = ({ item }: { item: any }) => (
        <View style={{ backgroundColor: 'red' }}  >
            <Text >{item.cat}</Text>
        </View>
    );



    return (
        <View style={{ width: 100 }}> {/* Asegura que ocupe toda la pantalla */}
            {/* <TopBar /> */}
            {/* <Text>Ultimos movimientos</Text> */}
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
        </View >
    );

}

export default HomeScreen
