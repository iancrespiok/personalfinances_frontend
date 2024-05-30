import React from"react"

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomTitle from "./src/components/atoms/CustomTitle";
import { useEffect } from "react";
import { getService } from "./src/utils/getService";

export default function App() {

  useEffect(() => {
    getService()
  
  }, [])
  
  let num:Number= 123;
  return (
    <View style={styles.container}>
      <CustomTitle titlee={num.toString()}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
