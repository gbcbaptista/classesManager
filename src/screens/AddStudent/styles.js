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
    }
  });