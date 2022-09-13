import React, { useContext } from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import { FlatList } from "react-native";
import { BoldText } from "../../../components/BoldText";
import { TextContext } from "../../../contexts/TextContext";
import { styles } from "./styles";
import { Item } from "./Item";
import { StudentContext } from "../../../contexts/StudentContext";
import { HeaderArea } from "./HeaderArea"

export const HomeScreen = () => {

    const {
        texts,
        language,
        setLanguage
    } = useContext(TextContext);

    const {
        studentsList,
    } = useContext(StudentContext);

    const renderItem = ({item}) => (
            <Item todayClass={item} />
    );

    return(
        <View style={styles.container}>
            <HeaderArea />
            <BoldText style={styles.todayClassesTitle}>{texts.todayClasses}</BoldText>
            <FlatList
            data={studentsList}
            scrollEnabled={true}
            key={studentsList.length}
            extraData={studentsList}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            />
        </View>
    );
}