import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import SettingsSVG from '../atoms/SettingsSVG'
import HamburSVG from '../atoms/HamburSVG'

const TopBar = () => {
    return (
        <>
            <View style={styles.container} >
                <Text>Hola</Text>

            </View>
        </>
    )
}

export default TopBar


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
