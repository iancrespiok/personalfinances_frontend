import React from 'react'
import { View, Text, FlatList } from 'react-native'


type Item = {
    cat: string;
    name: string;
    gasto: boolean;
    id: number;
}

type Props = {
    dataRender: Item[];
}

const FlatListRender = ({ dataRender }: Props) => {


    const renderItem = ({ item }: { item: any }) => (
        <View style={{ backgroundColor: 'red' }}  >
            <Text>{item.cat}</Text>
        </View>
    );

    return (
        <View>
            <FlatList
                data={dataRender}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}

export default FlatListRender;