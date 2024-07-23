import React from "react";
import OptionsSvg from "../../../assets/svg/OptionsSvg";
import { TouchableOpacity } from "react-native";
import {SettingsSvg} from "../../../assets/svg/SettingSvg";


export const Settings = () => {
    return (
        <>
            <TouchableOpacity onPress={() => console.log("Press")}>
                <SettingsSvg/>
            </TouchableOpacity>
        </>
    );
};