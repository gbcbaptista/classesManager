import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";


export const RegularText = ({children, style}) => {

    return(
        <View>
            <Text style={[style, styles.regularText]}>{ children }</Text>
        </View>
    );
}