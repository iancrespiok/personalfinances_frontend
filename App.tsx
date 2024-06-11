import React, { useState } from"react"

import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import CustomTitle from "./src/components/atoms/CustomTitle";
import { useEffect } from "react";
import { getService } from "./src/utils/getService";
import CategoryForm from "./src/components/organisms/CategoryForm";

export default function App() {

  const [number, setNumber] = useState<number>(0)

  console.log("Renderizado")

  const suma = () => {
    return number+1
  }

  const restar = () => {
    return number-1
  }

  useEffect(() => {
    getService()
  
  }, [])
  
    return (
    <View style={styles.container}>
      <CustomTitle title="CREAR CATEGORIA"/>
      <StatusBar style="auto" />
      <CategoryForm></CategoryForm>
      
    
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
