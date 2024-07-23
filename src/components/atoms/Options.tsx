import React from "react";
import OptionsSvg from "../../../assets/svg/OptionsSvg";
import {Button, TouchableOpacity, View} from "react-native";


export const Options = () => {
    return (
        <>
            <TouchableOpacity onPress={() => console.log("Press")}>
                <OptionsSvg/>
            </TouchableOpacity>
        </>
    );
};