import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
      
      backgroundColor: '#63C2D1',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 2,
      elevation: 2,
    },
    headerTop: {
      marginLeft: 10,
      height: 50,
      flexDirection: 'row',
      alignItems: 'center',
    },
    name: {
      fontSize: 20,
      marginBottom: 5,
      flex: 1,
      marginVertical: 10,
      color: '#fff'
    },
    blankSpace: {
      flex: 2,
    },
    settingsIcon: {
      marginRight: 10,
      fontSize: 25,
    },
    valuesRow: {
      justifyContent: 'flex-end',
      flexDirection: 'row',
    },
    valuesView: {
      marginVertical: 10,
      marginHorizontal: 30,
    },
    headerLabels: {
      color: '#fff'
    }
  });