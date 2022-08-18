import React, { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { BoldText } from "../../../../components/BoldText";
import { RegularText } from "../../../../components/RegularText";
import { TextContext } from "../../../../contexts/TextContext";
import { UserContext } from "../../../../contexts/UserContext";
import { styles } from "./styles";


export const HeaderArea = () => {
    const {
        user
    } = useContext(UserContext);

    const values = {
        toReceiveValue: 1000,
        receivedValue: 1000
    }

    const {
        texts,
        language,
        setLanguage
    } = useContext(TextContext);
    
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerTop}>
                    <RegularText style={styles.name}>{texts.hey}</RegularText>
                    <BoldText style={styles.name}>{user.name}</BoldText>
                    <View style={styles.blankSpace} />
                    <TouchableOpacity onPress={() => setLanguage(!language)}>
                        <Text style={styles.settingsIcon}>⚙️</Text>
                    </TouchableOpacity>
                    
                </View>
                <View style={styles.valuesRow}>
                    <View style={styles.valuesView}>
                        <RegularText style={[styles.valuesRow, styles.headerLabels]}>{texts.toReceive}</RegularText>
                        <RegularText style={[styles.valuesRow, styles.headerLabels]}>{texts.moneySymbol}{values.toReceiveValue}</RegularText>
                    </View>
                    
                    <View style={styles.valuesView}>
                        <RegularText style={[styles.valuesRow, styles.headerLabels]}>{texts.received}</RegularText>
                        <RegularText style={[styles.valuesRow, styles.headerLabels]}>{texts.moneySymbol}{values.toReceiveValue}</RegularText>
                    </View>
                </View>
            </View>
        </View>
    );
}