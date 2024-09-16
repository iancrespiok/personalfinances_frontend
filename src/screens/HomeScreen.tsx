import React, { FC, useEffect, useState } from 'react'
import { View, StyleSheet, Switch, Button } from 'react-native'
import dataTest from '../utils/dataTest.json'
import TransactionHistory from '../components/organisms/TransactionHistory/TransactionHistory'
import { Dimensions } from 'react-native'
import getService from '../utils/getService'
import { useNavigation } from '@react-navigation/native'

interface Props {
    navigation: any
}
const HomeScreen: FC<Props> = () => {
    const { width } = Dimensions.get('window');
    const styles = createStyles(width);



    const navigation = useNavigation()
    const data = [{
        cat: 'mercado',
        name: 'arroz',
        gasto: true,
        id: 0
    }
    ]





  
    return (
        <View style={styles.container}>
            <TransactionHistory
                dataRender={dataTest}
            />


        <Button title="Haz clic en mí" onPress={(() => navigation.navigate('AddBought'))} />
        </View >
    );

}


const createStyles = (width: number) => StyleSheet.create({
    container: {
        width: width,
        backgroundColor: 'white',
    },
    darkMode: {
        backgroundColor: 'black',
    }

})



export default HomeScreen


