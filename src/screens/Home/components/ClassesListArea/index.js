import React, { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native";
import { BoldText } from "../../../../components/BoldText";
import { RegularText } from "../../../../components/RegularText";
import { TextContext } from "../../../../contexts/TextContext";
import { styles } from "./styles";
import { Item } from "./Item";
import { StudentContext } from "../../../../contexts/StudentContext";


export const ClassesListArea = () => {

    const {
        texts,
        language,
        setLanguage,
    } = useContext(TextContext);

    const {
        student
    } = useContext(StudentContext);r

    

    const renderItem = ({item}) => (
        <Item todayClass={item} />
    );

    return(
        <View style={styles.container}>
            <BoldText style={styles.todayClassesTitle}>{texts.todayClasses}</BoldText>
            <FlatList
            data={student}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            />
        </View>
    );
}