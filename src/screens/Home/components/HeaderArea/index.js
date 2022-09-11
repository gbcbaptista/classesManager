import React, { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { BoldText } from "../../../../components/BoldText";
import { RegularText } from "../../../../components/RegularText";
import { AccountingContext } from "../../../../contexts/PaymentContext";
import { TextContext } from "../../../../contexts/TextContext";
import { UserContext } from "../../../../contexts/UserContext";
import { styles } from "./styles";


export const HeaderArea = () => {
    const {
        user
    } = useContext(UserContext);

    const {
        accounting
    } = useContext(AccountingContext)

    const values = {
        toReceiveValue: accounting.toReceive,
        receivedValue: accounting.received
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

                    <View style={styles.namesContainer}>
                        <RegularText style={styles.name}>{texts.hey}, </RegularText>
                        <BoldText style={styles.name}>{user.name}</BoldText>
                    </View>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={() => setLanguage(!language)}>
                            <Text style={styles.settingsIcon}>⚙️</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                <View style={styles.headerBottom}>

                    <View style={styles.valuesView}>
                        <RegularText style={styles.headerLabels}>{texts.toReceive}: </RegularText>
                        <RegularText style={styles.headerLabels}>{texts.moneySymbol}{values.toReceiveValue}</RegularText>
                    </View>
                    
                    <View style={styles.valuesView}>
                        <RegularText style={styles.headerLabels}>{texts.received}: </RegularText>
                        <RegularText style={styles.headerLabels}>{texts.moneySymbol}{values.receivedValue}</RegularText>
                    </View>

                </View>
            </View>
        </View>
    );
}