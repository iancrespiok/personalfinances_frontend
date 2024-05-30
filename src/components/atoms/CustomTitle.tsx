import React,{FC} from 'react'
import {Text} from "react-native"


interface CustomTitleProps {
    title:string
}

const CustomTitle:FC<CustomTitleProps> = ({title}) => {
    return (
        <Text>{title}</Text>
    )
} 

export default CustomTitle;