import React, { useContext, useState } from "react";
import { TextInput, View, Text } from "react-native";
import { BoldText } from "../../components/BoldText";
import { TextContext } from "../../contexts/TextContext";
import { styles } from "./styles";
import DatePicker from 'react-native-date-picker'

export const AddStudent = () => {
    const [name, setName] = useState('')
    const [subject, setSubject] = useState('')
    const [paymentDay, setPaymentDay] = useState('')
    const [startDate, setStartDate] = useState('')
    const [frequency, setFrequency] = useState('')
    const [time, setTime] = useState('')
    const [gender, setGender] = useState('')

    const {
        texts,
    } = useContext(TextContext);

    return(
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <BoldText style={styles.title}>{texts.newStudentTitle}</BoldText>
            </View>

            <View style={styles.inputContainer}>
                <BoldText style={styles.inputLabel}>{texts.name}</BoldText>
                <TextInput 
                    style={styles.input}
                    value={name}
                    onChange={e => setName(e.target.event)}
                />
            </View>

            <View style={styles.inputContainer}>
                <BoldText style={styles.inputLabel}>{texts.subject}</BoldText>
                <TextInput 
                    style={styles.input}
                    value={subject}
                    onChange={e => setSubject(e.target.event)}
                />
            </View>

            <View style={styles.inputContainer}>
                <BoldText style={styles.inputLabel}>{texts.paymentDay}</BoldText>
                <TextInput 
                    style={styles.input}
                    value={paymentDay}
                    onChange={e => setPaymentDay(e.target.event)}
                />
            </View>

            <View style={styles.inputContainer}>
                <BoldText style={styles.inputLabel}>{texts.startDate}</BoldText>
                <DatePicker date={startDate} onDateChange={e => setStartDate(e.target.event)} />
            </View>

            <View style={styles.inputContainer}>
                <BoldText style={styles.inputLabel}>{texts.frequency}</BoldText>
                <TextInput 

                    style={styles.input}
                    value={frequency}
                    onChange={e => setFrequency(e.target.event)}
                />
            </View>
        </View>
        
    );
}