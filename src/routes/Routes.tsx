import { NavigationContainer } from "@react-navigation/native";
import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import Login from "../screens/Auth/Login/Login";
import Register from "../screens/Auth/Register/Register";
import AddBoughtForm from "../screens/Auth/AddBoughtForm/AddBoughtForm";

const AuthStack = createNativeStackNavigator();
const AppStack = createNativeStackNavigator();

interface RootNavigatorProps {
    isSignedIn: boolean
}

const RootNavigator:FC<RootNavigatorProps> = ({isSignedIn}) => {

  return (
    <NavigationContainer>
      {isSignedIn ? <AppStackScreen /> : <AuthStackScreen />}
    </NavigationContainer>
  );
};

export default RootNavigator;

const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
    </AuthStack.Navigator>
  );
};

const AppStackScreen = () => {
  return (
    <AppStack.Navigator initialRouteName="Home">
      <AppStack.Screen name="Home" component={HomeScreen} />
      <AppStack.Screen name="AddBought" component={AddBoughtForm} />
    </AppStack.Navigator>
  );
};
