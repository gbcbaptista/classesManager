import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
      backgroundColor: '#4EADBE',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 2,
      elevation: 2,
    },
    headerTop: {
      justifyContent: 'space-between',
      textAlign: 'center',
      marginLeft: 10,
      height: 50,
      flexDirection: 'row',
      flex: 1,
      alignItems: 'center',
    },
    namesContainer: {
      flexDirection: 'row',
    },
    name: {
      flex: 1,
      fontSize: 20,
      paddingBottom: 7,
      flex: 1,
      color: '#fff',
      maxWidth: 150,
      maxHeight: 25,
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