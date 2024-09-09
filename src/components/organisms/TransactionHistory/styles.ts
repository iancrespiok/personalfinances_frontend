import { StyleSheet } from "react-native";

const createStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginRight: 10,
      marginVertical: 10,
      flexDirection: "row",
      justifyContent: "space-between",
      
    },
    spent: {
      flex: 1,
      marginLeft: 10,
      flexDirection: "row",
    },
    name: {
      marginLeft: 10,
    },
    arrowLeftBottom: {
      transform: [{ rotate: "180deg" }],
      backgroundColor:'#9BD0F5',
    },
    arrowRightBottom: {
      transform: [{ rotate: "90deg" }],
    },
    topBar: {
      flex: 1,
      margin: 10,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    title: {
        fontFamily: "Poppins-Regular",
        fontWeight: 400,
        fontSize:25,
    },
    buttonSeeAll: {
      fontFamily: "Roboto-Regular",
      fontWeight: 500,
    },
  });

export default createStyles;
