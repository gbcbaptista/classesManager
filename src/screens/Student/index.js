import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useContext } from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { BoldText } from "../../components/BoldText";
import { RegularText } from "../../components/RegularText";
import * as Calendar from 'expo-calendar';
import { TextContext } from "../../contexts/TextContext";
import { DatePickerContext } from "../../contexts/DatePickerContext";

export const Student = () => {
    const route = useRoute();
    const { student } = route.params
    const navigation = useNavigation();

    const {
        texts,
    } = useContext(TextContext);

    const {
        currentDay,
        currentDate,
        currentTime,
    } = useContext(DatePickerContext);

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

            {student.gender === 0 &&
                <View style={[styles.row, {paddingBottom: 150,}]}>
                    <BoldText style={styles.studentIconStyle}>👩‍🎓</BoldText>
                </View>}

            {student.gender === 1 &&
                <View style={[styles.row, {paddingBottom: 150,}]}>
                    <BoldText style={styles.studentIconStyle}>👨‍🎓</BoldText>
                </View>}

            <View style={styles.row}>
                <BoldText style={styles.label}>{texts.name}: </BoldText>
                <RegularText style={styles.text}>{student.name}</RegularText>
            </View>

            <View style={styles.row}>
                <BoldText style={styles.label}>{texts.subject}: </BoldText>
                <RegularText style={styles.text}>{texts.subjects[student.subject].label}</RegularText>
            </View>

            <View style={styles.row}>
                <BoldText style={styles.label}>{texts.paymentDay}: </BoldText>
                <RegularText style={styles.text}>{texts.day} {student.paymentDay}</RegularText>
            </View>

            <View style={styles.row}>
                <BoldText style={styles.label}>{texts.frequency}: </BoldText>
                <RegularText style={styles.text}>{texts.frequencies[student.frequency].label}</RegularText>
            </View>

            <View style={styles.row}>
                <BoldText style={styles.label}>{texts.time}: </BoldText>
                <RegularText style={styles.text}>{currentTime(new Date(student.time))}h</RegularText>
            </View>

            <View style={styles.row}>
                <BoldText style={styles.label}>{texts.startDate}: </BoldText>
                <RegularText style={styles.text}>{currentDate(new Date(student.startDate), texts)}</RegularText>
            </View>

            <View style={styles.row}>
                <BoldText style={styles.label}>{texts.email}: </BoldText>
                <RegularText style={styles.text}>{student.email}</RegularText>
            </View>

            <View style={styles.row}>
                <BoldText style={styles.label}>{texts.phone}: </BoldText>
                <RegularText style={styles.text}>{student.phone}</RegularText>
            </View>

        </View>
    );
}