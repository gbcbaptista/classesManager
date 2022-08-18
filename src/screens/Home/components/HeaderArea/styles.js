import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
      
      backgroundColor: '#63C2D1',
      // backgroundColor: 'transparent',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 2,
      elevation: 2,
    },
    headerTop: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    name: {
      marginBottom: 5,
      flex: 1,
      margin: 10,
      color: '#fff'
    },
    blankSpace: {
      flex: 2,
      // fontSize: 25,
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