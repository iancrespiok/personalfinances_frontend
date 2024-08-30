import React, { useState } from "react"
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import CategoryForm from "./src/components/organisms/CategoryForm";
import Routes from "./src/routes/Routes";

export default function App() {


  return (
    <View >
      <Routes />
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
