import React, { useContext } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { BoldText } from "../../../../../components/BoldText";
import { RegularText } from "../../../../../components/RegularText";
import { styles } from "./styles";
import { useNavigation } from '@react-navigation/native';
import { TextContext } from "../../../../../contexts/TextContext";
import { DatePickerContext } from "../../../../../contexts/DatePickerContext";


export const Item = ({ todayClass }) => {
    
  const {
    texts,
  } = useContext(TextContext);

  const {
    currentDay,
    currentDate,
    currentTime,
} = useContext(DatePickerContext);

  const navigation = useNavigation();
  return(
  <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Student', todayClass.student)}>
    <View style={styles.item}>

      <View style={styles.idNameContainer}>
        <BoldText style={styles.contentId}>{todayClass.id}º</BoldText>
        <BoldText style={styles.contentName}>{todayClass.student.name}</BoldText>
      </View>
      
        <View style={styles.subjectContainer}>
          <RegularText style={styles.contentSubject}>{texts.subjects[todayClass.student.subject].label}</RegularText>
        </View>
        <View style={styles.timeContainer}>
          <RegularText style={styles.contentTime}>{currentTime(Date(todayClass.student.time))}</RegularText>
        </View>
      
    </View>
  </TouchableOpacity>
  )
};