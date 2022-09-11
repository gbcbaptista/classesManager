import { StyleSheet } from "react-native";
import Constants from 'expo-constants';

export const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      width: '100%',
      backgroundColor: '#4EADBE',
    },
    header: {
      height: 110,
    },
    headerTop: { 
      marginTop: 10,
      flex: 1,     
      textAlign: 'center',
      marginLeft: 10,
      height: 50,

      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    namesContainer: {
      flexDirection: 'row',
      minHeight: 30,
    },
    name: {
      flex: 1,
      fontSize: 20,
      flex: 1,
      color: '#fff',
      maxWidth: 150,
      maxHeight: 35,
      overflow: 'hidden',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end'
    },
    settingsIcon: {
      marginRight: 10,
      fontSize: 25,
    },

    headerBottom: {
      paddingTop: 10,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginBottom: 10,
      
    },
    valuesView: {
      alignItems: 'center',
      marginHorizontal: 30,
      marginBottom: 15,
    },
    headerLabels: {
      fontSize: 15,
      color: '#fff',
    }
  });