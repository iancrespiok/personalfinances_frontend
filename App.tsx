import React, { FC, useContext } from "react"
import {  ActivityIndicator, View } from 'react-native';
import RootNavigator from "./src/routes/Routes";
import { AuthContext, AuthProvider } from "./src/context/AuthContext";

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