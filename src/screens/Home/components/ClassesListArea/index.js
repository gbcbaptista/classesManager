import React, { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { TextContext } from "../../../../contexts/TextContext";
import { styles } from "./styles";

export const ClassesListArea = () => {

    const {
        language,
        setLanguage
    } = useContext(TextContext);

    return(
        <View style={styles.container}>
            <Text>Classes List</Text>
            <TouchableOpacity onPress={() => setLanguage(!language)} style={styles.button}>
                <Text style={styles.buttonText}>Language Change</Text>
            </TouchableOpacity>
        </View>
    );
}