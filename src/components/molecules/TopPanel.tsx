import React from "react";
import {Settings} from "../atoms/Settings";
import {Options} from "../atoms/Options";

import {Text, View, StyleSheet} from "react-native"

export const TopPanel = () => {
    return (
        <View style = {styles.topPanelStyles}>
            <Settings/>
            <Text>PersonalFinances</Text>
            <Options/>
        </View>
    );
};

const styles = StyleSheet.create({
    topPanelStyles: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%"
    },
    box: {

    }
})