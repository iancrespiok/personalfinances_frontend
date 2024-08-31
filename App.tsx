import React, { FC, useEffect, useState } from "react"
import {  ActivityIndicator, StyleSheet, View } from 'react-native';
import RootNavigator from "./src/routes/Routes";
import { isValidToken } from "./src/utils/tokenHandler";

export default function App() {

  const [sesionStatus, setSesionStatus] = useState<boolean>(false)
  const [loaderStatus, setLoaderStatus] = useState<boolean>(false);
  useEffect((() => {
    isValidToken().then((token) => (
      setSesionStatus(token)
    )).then(() => (
       setLoaderStatus(true)
    ))
  }),[])

  return ( <LoaderSession sesionStatus={sesionStatus} loaderStatus={loaderStatus} />  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

interface LoaderSessionProps {
  loaderStatus: boolean
  sesionStatus: boolean
}

const LoaderSession: FC<LoaderSessionProps> = ({loaderStatus,sesionStatus }) => {
  return (
    <View >{
      loaderStatus ?  <RootNavigator isSignedIn={sesionStatus} /> :   <ActivityIndicator size="large" />
  }
  </View>
  )
}