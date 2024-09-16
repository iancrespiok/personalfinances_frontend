import React, { FC } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import createStyles from './styles';
import { Props } from './interfaces';



const TransactionHistory: FC<Props> = ({ dataRender }) => {
    
    const styles = createStyles();

        const renderItem = ({ item }: { item: dataRender }) => (
            <View style={styles.container}>
                <View style={styles.spent}>
                    {item.spent ? <MaterialCommunityIcons name="arrow-bottom-left-thin-circle-outline" size={30} color="#358DF5" style={styles.arrowLeftBottom} /> : <MaterialCommunityIcons name="arrow-bottom-right-thin-circle-outline" size={24} color="black" style={styles.arrowRightBottom} />}
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

    export default TransactionHistory;


