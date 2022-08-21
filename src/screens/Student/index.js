import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { TextInput, View, Text } from "react-native";
import { styles } from "./styles";
import { BoldText } from "../../components/BoldText";
import { RegularText } from "../../components/RegularText";


export const Student = () => {
    const route = useRoute();
    const { student } = route.params
    const navigation = useNavigation();

    useEffect(
        () => navigation.setOptions({ title: student.name }),[]
    )

    return(
        <View style={styles.container}>

            {student.studentIcon == 1 &&
                <View style={styles.row}>
                    <BoldText style={styles.studentIconStyle}>👨‍🎓</BoldText>
                </View>}

            {student.studentIcon == 2 &&
                <View style={styles.row}>
                    <BoldText style={styles.studentIconStyle}>👩‍🎓</BoldText>
                </View>}

            <View style={styles.row}>
                <BoldText style={styles.label}>Matéria: </BoldText>
                <RegularText style={styles.text}>{student.subject}</RegularText>
            </View>

            <View style={styles.row}>
                <BoldText style={styles.label}>Frequência: </BoldText>
                <RegularText style={styles.text}>{student.frequency}</RegularText>
            </View>

            <View style={styles.row}>
                <BoldText style={styles.label}>Horário: </BoldText>
                <RegularText style={styles.text}>{student.time}</RegularText>
            </View>



        </View>
    );
}