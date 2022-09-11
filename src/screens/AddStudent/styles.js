import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
      height: '100%',
      backgroundColor: '#4EADBE',
    },
    titleContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 10,
    },  
    title: {
      fontSize: 25,
      color: '#fff'

    },
    inputContainer: {
      marginRight: 15,
      flexDirection: 'row',
      marginTop: 20,
      textAlign: 'center',
      alignItems: 'center'
    },
    input: {
      paddingLeft: 15,
      backgroundColor: '#fff',
      paddingHorizontal: 5,
      marginHorizontal: 5,
      flex: 1,
      flexBasis: 'auto',
      height: 40,
      borderRadius: 15,
      fontSize: 18,
    },
    inputLabel: {
      marginLeft: 20,
      fontSize: 18,
      lineHeight: 40,
      color: '#fff'
    },
    dateContainer: {

    },
    dateLabel: {
      backgroundColor: '#fff',
      borderRadius: 10,
      paddingHorizontal: 15,
      height: 40,
      lineHeight: 35,
      marginLeft: 20,
      color: '#000', 
      fontSize: 18,
    },
    buttonSave: {
      margin: 20,
      width: 150,
      justifyContent: 'center',
      backgroundColor: '#fff',
      flexDirection: 'row',
      borderRadius: 15,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 2,
      elevation: 2,
    },
    buttonText: {
      fontSize: 18,
      lineHeight: 40,
      color: '#000'
    },

  });