import React, { FC, useEffect, useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";
import axios from "axios";
import { Picker } from "@react-native-picker/picker";
import { getService } from "../../../utils/getService";
import { postService } from "../../../utils/postService";

interface props {}

const AddBought = () => {
  const [selectedValue, setSelectedValue] = useState("option1");
  const [categories, setCategories] = useState([{}])

  // const handleBoughtSubmit = () => {
  //     const gasto = {
  //         "description": "Gastos salud, gimnasio, medicos",
  //         "categoryId": 1,
  //         "date": "2024-08-23",
  //         "amount": 100.00,
  //         "userId": 1,
  //         "installments": 3,
  //         "cardId": 1
  //     }
  //     try {
  //         postService(gasto, 'bought')
  //     } catch (error) {

  //     }

  // }

  useEffect(() => {
    
    getService('/categories').then((data) => (
      setCategories(data)
    ))
   
  }, [])
  





  const [formData, setFormData] = useState({
    description: "",
    instalments: 0,

  
    amount: 0,
    categoryId: undefined
  });

  console.log(formData)

  const handleChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      postService(formData, 'bought').then((res) => console.log(res))
     
    } catch (error) {
      Alert.alert("Error", "Something went wrong!");
      console.error("Error:", error);
      // Maneja el error aquí
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your first name"
        onChangeText={(value) => handleChange("firstName", value)}
      />
      <Text style={styles.label}>Amount</Text>
      <TextInput
        style={styles.input}
        placeholder="Amount"
        keyboardType="numeric"
        onChangeText={(value) => handleChange("amount", value)}
      />
      <Text style={styles.label}>Categoria</Text>
      <CategoryPicker selectedValue={selectedValue} handleChange={handleChange} formData={formData} categories={categories} />
     
    

      <Button title="Sign Up" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    width: 400,
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 16,
    borderRadius: 4,
  },
});

export default AddBought;


interface CategoryPickerProps {
  selectedValue: any,
  handleChange: any,
  formData:any,
  categories: any

}

const CategoryPicker: FC<CategoryPickerProps>  = ({selectedValue, handleChange, formData, categories}) => {

  return(
    <View style={styles.container}>
    <Text style={styles.label}>Seleccione una opción:</Text>
    <Picker
      selectedValue={selectedValue}
      onValueChange={(value) => handleChange("categoryId", value)}
      // style={styles.picker}
    >
     
      { 
        categories.map((category:any) => {
          return  <Picker.Item label={category.name} value={category.id} />
        })
      }
    </Picker>
    <Text>Opción seleccionada: {formData.categoryId}</Text>
  </View>
  )
}