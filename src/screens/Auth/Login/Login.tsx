import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Login = () => {


    const navigation = useNavigation()

    // Guardar el token
    const storeToken = async (token: any) => {
        try {
            await AsyncStorage.setItem('userToken', token);
        } catch (error) {
            console.error('Error storing the token', error);
        }
    };


    const [formData, setFormData] = useState({

        email: 'crespi.ian@gmail.com',
        password: '123456'
    });

    const handleChange = (name: string, value: string) => {
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:8080/user/login', formData);
            Alert.alert('Success', 'User registered successfully!');
            console.log('Response:', response.data);
            storeToken(response.data)
            navigation.navigate('Home')
            console.log('adssadas')
            // Maneja la respuesta aquí, como redireccionar o limpiar el formulario
        } catch (error) {
            Alert.alert('Error', 'Something went wrong!');
            console.error('Error:', error);
            // Maneja el error aquí
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Email:</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your email"
                keyboardType="email-address"
                value={formData.email}
                onChangeText={(value) => handleChange('email', value)}
            />
            <Text style={styles.label}>Password:</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your password"
                secureTextEntry
                value={formData.password}
                onChangeText={(value) => handleChange('password', value)}
            />
            <Button title="Log in" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        width: 400,
        backgroundColor: '#fff'
    },
    label: {
        fontSize: 16,
        marginBottom: 8
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 16,
        borderRadius: 4
    }
});

export default Login;
