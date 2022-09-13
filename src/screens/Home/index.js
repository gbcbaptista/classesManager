import React from "react";
import { View } from "react-native";
import { HomeScreen } from "./HomeScreen";

import { styles } from "./styles";

export const Home = () => {
    return(
        <View style={styles.container}>
            <HomeScreen />
        </View>
    );
}