import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'

const HomeStackNavigator = createNativeStackNavigator()
const RoutesHandler = () => {
    return (
        <HomeStackNavigator.Navigator
            initialRouteName='Home'
        >
            <HomeStackNavigator.Screen
                name='Home'
                component={HomeScreen}
            />
        </HomeStackNavigator.Navigator>
    )
}



const Routes = () => {
    return (
        <NavigationContainer>
            <RoutesHandler />
        </NavigationContainer>
    )
}
export default Routes
