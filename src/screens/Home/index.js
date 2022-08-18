import React from "react";
import { View } from "react-native";
import { ClassesListArea } from "./components/ClassesListArea";
import { HeaderArea } from "./components/HeaderArea";
import { styles } from "./styles";

export const Home = () => {
    return(
        <View style={styles.container}>
            <HeaderArea />
            <ClassesListArea />
        </View>
    );
}