import React from "react";
import { View } from "react-native";
import { ClassesListArea } from "./components/ClassesListArea";
import { HeaderArea } from "./components/HeaderArea";

export const Home = () => {
    return(
        <View>
            <HeaderArea />
            <ClassesListArea />
        </View>
    );
}