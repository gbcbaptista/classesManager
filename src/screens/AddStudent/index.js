import React, { useContext, useState, useEffect } from "react";
import { TextInput, View, Text } from "react-native";
import { BoldText } from "../../components/BoldText";
import DropdownComponent from "../../components/DropdownComponent";
import { TextContext } from "../../contexts/TextContext";
import { styles } from "./styles";
import { DateTimePickerAndroid, RCTDateTimePickerNative } from '@react-native-community/datetimepicker';


export const AddStudent = () => {
    const [name, setName] = useState('')
    
    const [paymentDay, setPaymentDay] = useState('')
    const [startDate, setStartDate] = useState(new Date())
    const [frequency, setFrequency] = useState(null)
    const [time, setTime] = useState('')
    const [gender, setGender] = useState('')

    const openDatePicker = () => {
        DateTimePickerAndroid.open()
        console.log("abrindo")
        // DateTimePickerAndroid.dismiss(['date'])
    }

    

    const {
        texts,
    } = useContext(TextContext);

    const [open, setOpen] = useState(false);
    const [subject, setSubject] = useState(null)
    const [items, setItems] = useState(texts.subjects);

    useEffect(
        () => setItems(texts.subjects),
        [texts]
    )

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

            <View style={[styles.inputContainer, {zIndex: 100}]}>
                <BoldText style={styles.inputLabel}>{texts.subject}</BoldText>
                <DropdownComponent 
                    style={styles.dropdown}
                    containerStyle={styles.dropdownContainer}
                    maxHeight={200}
                    open={open}
                    value={subject}
                    items={items}
                    setOpen={setOpen}
                    setValue={setSubject}
                    setItems={setItems}
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
                {/* {openDatePicker &&
                    <DateTimePicker mode="date" value={startDate} onChange={() => closeDatePicker(e.target.event)} />
                } */}
                {/* <RCTDateTimePickerNative /> */}
                <Text onPress={() => openDatePicker()}>{startDate.toDateString()}</Text>
            </View>

            <View style={styles.inputContainer}>
                <BoldText style={styles.inputLabel}>{texts.frequency}</BoldText>
                <TextInput 
                    style={styles.input}
                    value={frequency}
                    onChange={e => setFrequency(e.target.event)}
                />
            </View>

            <View style={styles.inputContainer}>
                <BoldText style={styles.inputLabel}>{texts.time}</BoldText>
                
                
            </View>
        </View>
        
    );
}