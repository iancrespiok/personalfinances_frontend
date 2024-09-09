import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useAuthService } from '../../../hooks/useAuthService';
const Login = () => {

    const navigation = useNavigation()
    const { postAuthService } = useAuthService()



    const [formData, setFormData] = useState({

        email: 'test@gmail.com',
        password: 'Password1.'
    });

    const handleChange = (name: string, value: string) => {
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async () => {
        try {
            const response = postAuthService(formData, 'user/login');
            Alert.alert('Success', 'User registered successfully!');
            console.log('Response:', response);
        
           
            // Maneja la respuesta aquí, como redireccionar o limpiar el formulario
        } catch (error) {
            Alert.alert('Error', 'Something went wrong!');
            console.error('Error:', error);
            // Maneja el error aquí
        }
    };


    const handleNavigate = (route: string) => {
        navigation.navigate(route);
    }

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
            <Button title="Log in" onPress={() => handleSubmit()} />
            <Button title="Register" onPress={() => handleNavigate("Register")} />
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


