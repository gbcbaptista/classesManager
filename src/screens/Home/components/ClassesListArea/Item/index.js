import React, { useCallback } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { BoldText } from "../../../../../components/BoldText";
import { RegularText } from "../../../../../components/RegularText";
import { styles } from "./styles";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export const Item = ({ todayClass }) => {
  const navigation = useNavigation();
  return(
  <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Student', todayClass)}>
    <View style={styles.item}>

      <View style={styles.idNameContainer}>
        <BoldText style={styles.contentId}>{todayClass.id}º</BoldText>
        <BoldText style={styles.contentName}>{todayClass.student.name}</BoldText>
      </View>
      
        <View style={styles.subjectContainer}>
          <RegularText style={styles.contentSubject}>{todayClass.student.subject}</RegularText>
        </View>
        <View style={styles.timeContainer}>
          <RegularText style={styles.contentTime}>{todayClass.student.time}</RegularText>
        </View>
      
    </View>
  </TouchableOpacity>
  )
};