import React, { FC } from "react"
import PlusSVG from "./PlusSVG"
import { View, Text } from "react-native"

export interface ItemProps {

    item: {
        cat: string,
        name: string,
        gasto: boolean,
        monto?: boolean
    }

}

const Item: FC<ItemProps> = ({ item }) => {
    const { cat, gasto, monto } = item
    return (
        <View>
            <PlusSVG />
            <Text>{gasto}</Text>
            <Text>{monto}</Text>
        </View>
    )
}

export default Item
