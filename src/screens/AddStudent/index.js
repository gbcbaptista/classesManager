import React, { useContext, useState, useEffect } from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import { BoldText } from "../../components/BoldText";
import DropdownComponent from "../../components/DropdownComponent";
import { TextContext } from "../../contexts/TextContext";
import { styles } from "./styles";
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { StudentContext } from "../../contexts/StudentContext";
import { DatePickerContext } from "../../contexts/DatePickerContext";
import { useNavigation } from '@react-navigation/native';


export const AddStudent = () => {
    const navigation = useNavigation();

    const {
        texts,
    } = useContext(TextContext);

    const {
        studentsList,
        newStudentModel,
        addStudent
    } = useContext(StudentContext);

    const {
        currentDay,
        openDayPicker,

        currentDate,
        openDatePicker,

        currentTime,
        openTimePicker
    } = useContext(DatePickerContext);

    useEffect(
        () => setItems(texts.subjects),
        [texts]
    )

    const [newStudent, setNewStudent] = useState(newStudentModel);
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState(texts.subjects);

    const changeStudentData = (tag, value) => {
        let updatedStudent = {...newStudent};
        updatedStudent.student[tag] = value

        return updatedStudent
    }

    const onChangeDay = (event, selectedDay) => {
        setNewStudent(changeStudentData('paymentDay', currentDay(selectedDay)))
    }

    const onChangeDate = (event, selectedDate) => {
        setNewStudent(changeStudentData('startDate', selectedDate))
    }

    const onChangeTime = (event, selectedTime) => {
        setNewStudent(changeStudentData('time', selectedTime))
    }

    const addNewStudent = () => {
        let student = newStudent;
        student.id = studentsList.length+1;
        console.log(newStudent)
        setNewStudent(student)
        addStudent(newStudent)
        navigation.navigate('Home')
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
                    value={newStudent.student.subject}
                    items={items}
                    setOpen={setOpen}
                    onSelectItem={text => setNewStudent(changeStudentData('subject', text.value))}
                    setItems={setItems}
                />
            </View>

            <View style={styles.inputContainer}>
                <BoldText style={styles.inputLabel}>{texts.paymentDay}</BoldText>
                <Text
                onPress={() => openDayPicker(DateTimePickerAndroid, onChangeDay)}
                style={styles.dateLabel}>
                    {
                        newStudent.student.paymentDay === 0 ?
                        `${texts.day} ${currentDay(new Date())}` 
                        : `${texts.day} ${newStudent.student.paymentDay}`
                    }
                </Text>
            </View>

            <View style={styles.inputContainer}>
                <BoldText style={styles.inputLabel}>{texts.startDate}</BoldText>
                <Text 
                onPress={() => openDatePicker(DateTimePickerAndroid, onChangeDate)}
                style={styles.dateLabel}>
                    {
                        newStudent.student.startDate === '' ? 
                        `${currentDate(new Date(), texts)}`
                        : `${currentDate(newStudent.student.startDate, texts)}`
                    }
                </Text>
            </View>

            <View style={styles.inputContainer}>
                <BoldText style={styles.inputLabel}>{texts.frequency}</BoldText>
                <TextInput 
                    style={styles.input}
                    defaultValue={newStudent.student.frequency}
                    onChangeText={text => setNewStudent(changeStudentData('frequency', parseInt(text)))}
                />
            </View>

            <View style={styles.inputContainer}>
                <BoldText style={styles.inputLabel}>{texts.time}</BoldText>
                <Text 
                onPress={() => openTimePicker(DateTimePickerAndroid, onChangeTime)}
                style={styles.dateLabel}>
                    {
                        newStudent.student.time === '' ?
                        currentTime(new Date())
                        : currentTime(newStudent.student.time)
                    }
                </Text>
            </View>

            <View style={[styles.inputContainer, {zIndex: 100}]}>
                <BoldText style={styles.inputLabel}>Gender</BoldText>
                <TextInput 
                    style={styles.input}
                    defaultValue={newStudent.student.gender}
                    onChangeText={text => setNewStudent(changeStudentData('gender', parseInt(text)))}
                />
            </View>

            <View style={[styles.inputContainer, {zIndex: 100}]}>
                <BoldText style={styles.inputLabel}>{texts.email}</BoldText>
                <TextInput 
                    style={styles.input}
                    defaultValue={newStudent.student.email}
                    onChangeText={text => setNewStudent(changeStudentData('email', text))}
                />
            </View>

            <View style={[styles.inputContainer, {zIndex: 100}]}>
                <BoldText style={styles.inputLabel}>{texts.phone}</BoldText>
                <TextInput 
                    style={styles.input}
                    defaultValue={newStudent.student.phone}
                    onChangeText={text => setNewStudent(changeStudentData('phone', text))}
                />
            </View>

            <View style={[{ flex: 1, alignItems: 'flex-end' }]}>
                <View style={[{ flex: 1, flexDirection: 'row', alignItems: 'flex-end' }]}>
                    <TouchableOpacity onPress={() => addNewStudent()} style={styles.buttonSave} disabled={false}>
                        <BoldText style={[styles.buttonText]}>{texts.save}</BoldText>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
        
    );
}