import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { BoldText } from "../../../../../components/BoldText";
import { RegularText } from "../../../../../components/RegularText";
import { styles } from "./styles";


export const Item = ({ todayClass }) => (
  <View style={styles.container}>
    <View style={styles.item}>
      <View style={styles.idNameContainer}>
        <BoldText style={styles.contentId}>{todayClass.id}</BoldText>
        <BoldText style={styles.contentName}>{todayClass.student.name}</BoldText>
      </View>
      <View style={styles.subjectContainer}>
        <RegularText style={styles.contentSubject}>{todayClass.student.subject}</RegularText>
      </View>
      <View style={styles.timeContainer}>
        <RegularText style={styles.contentTime}>{todayClass.student.time}</RegularText>
      </View>
    </View>
  </View>
  );