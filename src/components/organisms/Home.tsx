import React from "react";
import {TopPanel} from "../molecules/TopPanel";
import {LastFlows} from "../molecules/LastFlows";
import {AddFlow} from "../molecules/AddFlow";
import {View} from "react-native";
import homeStyle from "../../screens/HomeScreen/homeStyle";


export const Home = () => {
    return (
        <View style={homeStyle.homeBg}>
            <TopPanel></TopPanel>
            <LastFlows></LastFlows>
            <AddFlow></AddFlow>
        </View>
    );
};

