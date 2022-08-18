import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";


export const BoldText = ({children, style}) => {

    return(
        <View>
            <Text style={[style, styles.boldText]}>{ children }</Text>
        </View>
    );
}