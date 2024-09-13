import React, { FC, useEffect, useState } from 'react'
import { View, StyleSheet, Switch } from 'react-native'
import TransactionHistory from '../components/organisms/TransactionHistory/TransactionHistory'
import { Dimensions } from 'react-native'
import useGetService from '../hooks/useGetService'

interface Props {
    navigation: any
}
const HomeScreen: FC<Props> = () => {

    const { width } = Dimensions.get('window');
    const styles = createStyles(width);
    const { data, loading, error } = useGetService("moneyflows");

    return (
        <View style={styles.container}>
            <TransactionHistory
                dataRender={data}
            />
        </View >
    );

}
const createStyles = (width: number) => StyleSheet.create({
    container: {
        width: width,
        backgroundColor: 'white',
    },
})

export default HomeScreen


