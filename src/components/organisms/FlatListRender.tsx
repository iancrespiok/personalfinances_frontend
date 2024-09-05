import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

type Item = {
    cat: string;
    name: string;
    spent: boolean;
    value: number;
    id: number;
}

type Props = {
    dataRender: Item[];
}

const FlatListRender = ({ dataRender }: Props) => {

    const renderItem = ({ item }: { item: any }) => (

        <View style={styles.container}>
            <View style={styles.spent}>
                {item.spent ? <MaterialCommunityIcons name="arrow-bottom-left-thin-circle-outline" size={24} color="black" style={styles.arrowLeftBottom}/>  : <MaterialCommunityIcons name="arrow-bottom-right-thin-circle-outline" size={24} color="black" style={styles.arrowRightBottom} />}
                <Text style={styles.name}>{item.name}</Text>
            </View>
            <Text>${item.value}</Text>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginRight: 10,
        marginVertical:10,
        flexDirection: 'row',
        justifyContent:'space-between',
    },
    spent:{
        flex:1,
        marginLeft:10,
        flexDirection:'row',
    },
    name:{ 
        marginLeft:10,
    },
    arrowLeftBottom:{
        transform:[{rotate:'180deg'}],

    },
    arrowRightBottom:{
        transform:[{rotate:'90deg'}],

    },
})
