import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { TextProvider } from './src/contexts/TextContext';
import { UserProvider } from './src/contexts/UserContext';
import { useFonts,
        Montserrat_400Regular,
        Montserrat_700Bold,
      } from '@expo-google-fonts/montserrat';
import { Rotas } from './src/Rotas';
import { StudentProvider } from './src/contexts/StudentContext';

export default function App() {

const [ fontLoaded ] = useFonts({
  'MontserratRegular': Montserrat_400Regular,
  'MontserratBold': Montserrat_700Bold
})

  if (!fontLoaded) {
    return <View><Text>missing</Text></View>
  }

  return (
    <TextProvider>
      <UserProvider>
        <StudentProvider>
            <StatusBar 
              StatusBarStyle='light-content'
              backgroundColor="#fff"
            />
            <SafeAreaView style={styles.container}>
              <Rotas />
            </SafeAreaView>
        </StudentProvider>
      </UserProvider>
    </TextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    marginTop: Constants.statusBarHeight 
  },
});