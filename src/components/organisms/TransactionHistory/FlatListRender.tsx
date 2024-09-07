import React, { FC } from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import createStyles from './styles';
import { Props } from './interfaces';


const FlatListRender: FC<Props> = ({ dataRender, theme }) => {

    const styles = createStyles(theme);

    const renderItem = ({ item }: { item: any }) => (
        <View style={styles.container}>
            <View style={styles.spent}>
                {item.spent ? <MaterialCommunityIcons name="arrow-bottom-left-thin-circle-outline" size={24} color="black" style={styles.arrowLeftBottom} /> : <MaterialCommunityIcons name="arrow-bottom-right-thin-circle-outline" size={24} color="black" style={styles.arrowRightBottom} />}
                <Text style={styles.name}>{item.name}</Text>
            </View>
            <Text>${item.value}</Text>
        </View>
    );

    return (
        <View >
            <View style={styles.topBar}>
                <Text style={styles.title}>Transaction History</Text>
                <TouchableOpacity>
                    <Text style={styles.buttonSeeAll}>See All</Text>
                </TouchableOpacity>
            </View>
            <View>
                <FlatList
                    data={dataRender}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        </View>
    )
}

export default FlatListRender;


