import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import Login from '../screens/Auth/Login/Login';
import Register from '../screens/Auth/Register/Register';
import AddBoughtForm from '../screens/Auth/AddBoughtForm/AddBoughtForm';

const Stack = createNativeStackNavigator();

const RoutesHandler = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="AddBought" component={AddBoughtForm} />
        </Stack.Navigator>
    );
};

const Routes = () => {
    return (
        <NavigationContainer>
            <RoutesHandler />
        </NavigationContainer>
    );
};

export default Routes;
