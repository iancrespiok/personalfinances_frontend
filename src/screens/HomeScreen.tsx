import React, { FC, useState } from 'react'
import {  View, StyleSheet, Switch } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import dataTest from '../utils/dataTest.json'
import { FlatListRender } from '../components/organisms'



interface Props {
    navigation: any
}
const HomeScreen: FC<Props> = () => {


    const navigation = useNavigation()
    const [isDarkTheme, setisDarkTheme] = useState(false);
    const toggleSwitch = () => {
        setisDarkTheme(!isDarkTheme);
    };

    const styles = createStyles(isDarkTheme);

    return (
        <View style={styles.container}>
            {/**Switch para probar modos de colores */}
            <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={isDarkTheme ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isDarkTheme}
            />
            <FlatListRender
                dataRender={dataTest}
                theme={isDarkTheme}
            />
        </View >
    );

}



const createStyles = (isDarkTheme: boolean) =>
    StyleSheet.create({
        container: {
            width: 500,
            backgroundColor: isDarkTheme ? '#1E1E1E' : '#F9F9F9',
        },
        darkMode:{
            backgroundColor: 'black',
        }

    })
    

export default HomeScreen