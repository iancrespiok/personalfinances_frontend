import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const handleChange = (name: string, value: string) => {
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:8080/user/register', formData);
            Alert.alert('Success', 'User registered successfully!');
            console.log('Response:', response.data);
            // Maneja la respuesta aquí, como redireccionar o limpiar el formulario
        } catch (error) {
            Alert.alert('Error', 'Something went wrong!');
            console.error('Error:', error);
            // Maneja el error aquí
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>First Name:</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your first name"
                value={formData.firstName}
                onChangeText={(value) => handleChange('firstName', value)}
            />
            <Text style={styles.label}>Last Name:</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your last name"
                value={formData.lastName}
                onChangeText={(value) => handleChange('lastName', value)}
            />
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
            <Button title="Sign Up" onPress={handleSubmit} />
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

export default Register;
