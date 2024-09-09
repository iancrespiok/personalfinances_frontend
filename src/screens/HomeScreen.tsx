import React, { FC, useEffect, useState } from 'react'
import { View, StyleSheet, Switch } from 'react-native'
import dataTest from '../utils/dataTest.json'
import TransactionHistory from '../components/organisms/TransactionHistory/TransactionHistory'
import { Dimensions } from 'react-native'
import getService from '../utils/getService'

interface Props {
    navigation: any
}
const HomeScreen: FC<Props> = () => {
    const { width } = Dimensions.get('window');
    const styles = createStyles(width);


    // useEffect(() => {
    //     getService('moneyFlows')
    //         .then((data) => console.log("Test", data))
    
    //     }, []);

    return (
        <View style={styles.container}>
            <TransactionHistory
                dataRender={dataTest}
            />
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


