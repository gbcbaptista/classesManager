import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
      height: '100%',
      backgroundColor: '#4EADBE',
    },
    row: {
      marginTop: 20,
      justifyContent: 'center',
      flexDirection: 'row',
      flexBasis: 150,
      
    },
    label: {
      fontSize: 20,
      color: 'white',
      flexGrow: 2,
    },
    text: {
      fontSize: 20,
      color: 'white',
      marginLeft: 10,
    },
    studentIconStyle: {
      textAlign: 'center',
      lineHeight: 80,
      backgroundColor: '#fff',
      borderRadius: 50,
      height: 100,
      width: 100,
      fontSize: 50,
      color: 'white',
    }
  });