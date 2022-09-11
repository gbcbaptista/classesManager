import React, { useContext, useState, useEffect } from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import { BoldText } from "../../components/BoldText";
import { RegularText } from "../../components/RegularText";
import DropdownComponent from "../../components/DropdownComponent";
import { TextContext } from "../../contexts/TextContext";
import { styles } from "./styles";
import { DateTimePickerAndroid, RCTDateTimePickerNative } from '@react-native-community/datetimepicker';
import { formatNumber } from "../../helpers/dateHandler";
import { StudentContext } from "../../contexts/StudentContext";
import { DayPickerContext, DayPickerProvider } from "../../contexts/DayPickerContext";


export const AddStudent = () => {
    const {
        texts,
    } = useContext(TextContext);

    const {
        newStudentModel,
        addStudent
    } = useContext(StudentContext);

    const {
        currentDay,
        openDayPicker
    } = useContext(DayPickerContext);

    useEffect(
        () => setItems(texts.subjects),
        [texts]
    )

    const [newStudent, setNewStudent] = useState(newStudentModel)

    const changeStudentData = (tag, value) => {
        let updatedStudent = {...newStudent};
        updatedStudent.student[tag] = value

        return updatedStudent
        
    }
    const [name, setName] = useState('')
    // const [paymentDay, setPaymentDay] = useState('')
    const [startDate, setStartDate] = useState('')
    const [frequency, setFrequency] = useState('')
    const [time, setTime] = useState('')
    const [gender, setGender] = useState('2')
    const [allowedToSave, setAllowedToSave] = useState(false)
    const [open, setOpen] = useState(false);
    const [subject, setSubject] = useState(null)
    const [items, setItems] = useState(texts.subjects)
    const [email, setEmail] = useState('joao@gmail.com')
    const [phone, setPhone] = useState('11 987811864')

    useEffect(
        () => {
            // paymentDay !== '' &&
            startDate !== '' &&
            frequency !== '' &&
            time !== '' &&
            gender !== '' 
            ? setAllowedToSave(true) : setAllowedToSave(false)
        },
        [startDate, frequency, time, gender]
    )

    const onChangeDay = (event, seletedDay) => {
        setNewStudent(changeStudentData('paymentDay', currentDay(seletedDay)))
        console.log(newStudent.student)
    }

    const currentDate = (currentDate) => {
        return `${texts.weekDays[currentDate.getDay()]} ${formatNumber(currentDate.getDate())} ${texts.months[currentDate.getMonth()]} ${currentDate.getFullYear()}`
    }

    const onChangeDate = (event, seletedDate) => {
        setStartDate(seletedDate);
    }

    const openDatePicker = () => {
        DateTimePickerAndroid.open(
            {value: new Date(),
            onChange: onChangeDate,
            mode: 'date',
        });
    }

    const currentTime = (currentTime) => {
        return `${formatNumber(currentTime.getHours())}:${formatNumber(currentTime.getMinutes())}`
    }

    const onChangeTime = (event, selectedTime) => {
        setTime(selectedTime);
    }

    const openTimePicker = () => {
        DateTimePickerAndroid.open(
            {value: new Date(),
            onChange: onChangeTime,
            mode: 'time',
        });
    }

    const createStudent = () => {
        console.log(name)
        let newStudent = {
            id:9, student:{
                name: name,
                subject: subject,
                // paymentDay: `${paymentDay.getDate()}`,
                startDate: currentDate(startDate), 
                frequency: parseInt(frequency),
                time: currentTime(time),
                studentIcon: parseInt(gender)
            }
         }

        addStudent(newStudent)
        console.log(newStudent)
        console.log('creating...')
    }

    const addNewStudent = () => {
        addStudent(newStudent)
    }
    

    return(
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <BoldText style={styles.title}>{texts.newStudentTitle}</BoldText>
            </View>

            <View style={styles.inputContainer}>
                <BoldText style={styles.inputLabel}>{texts.name}</BoldText>
                <TextInput 
                    style={styles.input}
                    defaultValue={newStudent.student.name}
                    onChangeText={text => setNewStudent(changeStudentData('name', text))}
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
                <Text onPress={() => openDayPicker(DateTimePickerAndroid, onChangeDay)} style={styles.dateLabel}>
                    {
                        newStudent.student.paymentDay === 0 ?
                        `${texts.day} ${currentDay(new Date())}` 
                        : `${texts.day} ${newStudent.student.paymentDay}`
                    }
                </Text>
            </View>

            <View style={styles.inputContainer}>
                <BoldText style={styles.inputLabel}>{texts.startDate}</BoldText>
                <Text onPress={() => openDatePicker()} style={styles.dateLabel}>
                    {
                        startDate === '' ? 
                        `${currentDate(new Date())}` 
                        : `${currentDate(startDate)}`
                    }
                </Text>
            </View>

            <View style={styles.inputContainer}>
                <BoldText style={styles.inputLabel}>{texts.frequency}</BoldText>
                <TextInput 
                    style={styles.input}
                    defaultValue={frequency}
                    onChangeText={text => setFrequency(text)}
                />
            </View>

            <View style={styles.inputContainer}>
                <BoldText style={styles.inputLabel}>{texts.time}</BoldText>
                <Text onPress={() => openTimePicker()} style={styles.dateLabel}>{time === '' ? currentTime(new Date()) : currentTime(time)}</Text>
            </View>

            <View style={[styles.inputContainer, {zIndex: 100}]}>
                <BoldText style={styles.inputLabel}>Gender</BoldText>
                <TextInput 
                    style={styles.input}
                    defaultValue={gender}
                    onChangeText={text => setGender(text)}
                />
            </View>

            <View style={[styles.inputContainer, {zIndex: 100}]}>
                <BoldText style={styles.inputLabel}>{texts.email}</BoldText>
                <TextInput 
                    style={styles.input}
                    defaultValue={email}
                    onChangeText={text => setEmail(text)}
                />
            </View>

            <View style={[styles.inputContainer, {zIndex: 100}]}>
                <BoldText style={styles.inputLabel}>{texts.phone}</BoldText>
                <TextInput 
                    style={styles.input}
                    defaultValue={phone}
                    onChangeText={text => setPhone(text)}
                />
            </View>

            <View style={[{ flex: 1, alignItems: 'flex-end' }]}>
                <View style={[{ flex: 1, flexDirection: 'row', alignItems: 'flex-end' }]}>
                    <TouchableOpacity onPress={() => createStudent()} style={styles.buttonSave} disabled={!allowedToSave}>
                        <BoldText style={[styles.buttonText]}>{texts.save}</BoldText>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
        
    );
}