import React, { FC, useContext, useState } from "react"
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Button, StyleSheet, Text, View } from 'react-native';
import CategoryForm from "./src/components/organisms/CategoryForm";
import Routes from "./src/routes/Routes";
import { AuthContext, AuthProvider } from "./src/context/AuthContext";
import RootNavigator from "./src/routes/Routes";

export default function App() {

  return ( 
    <AuthProvider>
        <LoaderSession />  
    </AuthProvider>
);
}

const LoaderSession: FC = () => {
  const { loaderStatus } = useContext(AuthContext);
  return (
    <View>
      {loaderStatus ?  <RootNavigator /> : <ActivityIndicator size="large" />}
    </View>
  )
}