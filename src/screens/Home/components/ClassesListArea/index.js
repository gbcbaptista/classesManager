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
        students
    } = useContext(StudentContext);

    

    const renderItem = ({item}) => (
        <Item todayClass={item} />
    );

    return(
        <View style={styles.container}>
            <BoldText style={styles.todayClassesTitle}>{texts.todayClasses}</BoldText>
            <FlatList
            data={students}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            />
        </View>
    );
}