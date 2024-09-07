import { StyleSheet } from "react-native";

const createStyles = (theme: boolean) => StyleSheet.create({
    
    container: {
        flex: 1,
        marginRight: 10,
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    spent: {
        flex: 1,
        marginLeft: 10,
        flexDirection: 'row',
    },
    name: {
        marginLeft: 10,
    },
    arrowLeftBottom: {
        transform: [{ rotate: '180deg' }],

    },
    arrowRightBottom: {
        transform: [{ rotate: '90deg' }],

    },
    topBar: {
        flex: 1,
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    title: {

    },
    buttonSeeAll: {

    },
})

export default createStyles;