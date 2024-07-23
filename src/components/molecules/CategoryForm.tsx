import React, { useState } from 'react'
import { Button, TextInput, View } from 'react-native'
import { postService } from '../../utils/postService'

const CategoryForm = () => {
    const [formValues, setFormValues] = useState({
        name: "",
        description: ""
    })

    const handleName = (e: any) => {
        const value = e.target.value
        setFormValues({...formValues,name: value})
    }

    const handleDescription = (e: any) => {
        const value = e.target.value
        setFormValues({...formValues,description: value})
    }
  
    const handleButton = () => {
        console.log(formValues)
        postService(formValues)
    }

    return (
        <View>
            <TextInput onChange={(e) => {handleName(e)}} style={{backgroundColor: "red"}}></TextInput>
            <TextInput onChange={(e) => {handleDescription(e)}} style={{backgroundColor: "blue"}}></TextInput>
            <Button onPress={() => handleButton()} title='CREAR'></Button>
        </View>
    )
}

export default CategoryForm;