import React, { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-web";
import { BoldText } from "../../../../components/BoldText";
import { RegularText } from "../../../../components/RegularText";
import { TextContext } from "../../../../contexts/TextContext";
import { styles } from "./styles";
import { Item } from "./Item";


export const ClassesListArea = () => {

    const {
        texts,
        language,
        setLanguage,
    } = useContext(TextContext);

    // const {
    //     todayClasses
    // } = useContext(ClassesToday);r

    const todayClasses = [
        {id:1, student:{name: 'Raquel', subject: 'Piano', frequency: '15', time: '15:00h'}},
        {id:2, student:{name: 'Gabriel', subject: 'Orgão', frequency: '15', time: '16:00h'}},
    ]

    const renderItem = ({item}) => (
        <Item todayClass={item} />
    );

    return(
        <View style={styles.container}>
            <BoldText style={styles.todayClassesTitle}>{texts.todayClasses}</BoldText>
            <FlatList
            data={todayClasses}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            />
        </View>
    );
}