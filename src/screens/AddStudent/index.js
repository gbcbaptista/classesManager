import React from "react";
import { TextInput, View, Text } from "react-native";
import { styles } from "./styles";

export const AddStudent = () => {
    return(
        <View style={styles.container}>
            <Text>AddStudent</Text>
            <TextInput />
        </View>
    );
}