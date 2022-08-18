import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      backgroundColor: '#63C2D1',
    },
    item: {
      alignItems: 'center',
      flexDirection: 'row',
      padding: 20,
      marginHorizontal: 10,
      marginVertical: 5,
      color: '#000',
      backgroundColor: '#fff',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 2,
      elevation: 2,
    },
    idNameContainer: {
      flex: 1,
      flexDirection: 'row',
    },
    contentId: {
      textAlign: 'center',
      backgroundColor: '#63C2D1',
      lineHeight: 20,
      height: 20,
      width: 20,
      borderRadius: 10,
      marginRight: 10,
      fontSize: 15,
    },
    contentName: {
      overflow: "hidden",
      maxWidth: 90,
      maxHeight: 15,
      fontSize: 15,
    },
    subjectContainer: {
      flex: 1,
      flexDirection: 'row',
    },
    contentSubject: {
      margin: 'auto',
      width: 50,
      marginHorizontal: 50,
    },
    timeContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    contentTime: {
      fontSize: 15,
    },
    

});