import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useContext } from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { BoldText } from "../../components/BoldText";
import { RegularText } from "../../components/RegularText";
import * as Calendar from 'expo-calendar';
import { TextContext } from "../../contexts/TextContext";

export const Student = () => {
    const route = useRoute();
    const { student } = route.params
    const navigation = useNavigation();

    const {
        texts,
    } = useContext(TextContext);

    useEffect(
        () => navigation.setOptions({ title: student.name }),[]
    )

    const getCalendars = async () => {
        const calendars = await Calendar.getCalendarsAsync();
        calendars.map((calendar) => {
          if (calendar.name === 'Expo Calendar') {
            Calendar.getCalendarsAsync(calendar.id)
          }
        })
}
    return(
        <View style={styles.container}>

            {student.studentIcon == 1 &&
                <View style={[styles.row, {paddingBottom: 150,}]}>
                    <BoldText style={styles.studentIconStyle}>👨‍🎓</BoldText>
                </View>}

            {student.studentIcon == 2 &&
                <View style={[styles.row, {paddingBottom: 150,}]}>
                    <BoldText style={styles.studentIconStyle}>👩‍🎓</BoldText>
                </View>}

            <View style={styles.row}>
                <BoldText style={styles.label}>{texts.subject}: </BoldText>
                <RegularText style={styles.text}>{texts.subjects[student.subject]}</RegularText>
            </View>

            <View style={styles.row}>
                <BoldText style={styles.label}>{texts.paymentDay}: </BoldText>
                <RegularText style={styles.text}>{texts.day} {student.paymentDay}</RegularText>
            </View>

            <View style={styles.row}>
                <BoldText style={styles.label}>{texts.frequency}: </BoldText>
                <RegularText style={styles.text}>{texts.frequencies[student.frequency]}</RegularText>
            </View>

            <View style={styles.row}>
                <BoldText style={styles.label}>{texts.time}: </BoldText>
                <RegularText style={styles.text}>{student.time}h</RegularText>
            </View>



        </View>
    );
}