import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { SafeAreaView, StyleSheet, Text, View, Dimensions } from 'react-native';
import { TextProvider } from './src/contexts/TextContext';
import { Home } from './src/screens/Home';
import { useFonts,
        Montserrat_400Regular,
        Montserrat_700Bold,
      } from '@expo-google-fonts/montserrat';
      import { 
            NotoSans_400Regular,
            NotoSans_700Bold
      } from '@expo-google-fonts/noto-sans';
import { UserProvider } from './src/contexts/UserContext';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {

  const [ fontLoaded ] = useFonts({
    'MontserratRegular': Montserrat_400Regular,
    'MontserratBold': Montserrat_700Bold,
    'emoji': NotoSans_400Regular,
    'emoji2': NotoSans_700Bold,
  })
  if (!fontLoaded) {
    return <View><Text>missing fontFamily</Text></View>
  }

  return (
    <TextProvider>
      <UserProvider>
        <StatusBar 
          StatusBarStyle='light-content'
          backgroundColor="#fff"
        />
        <NavigationContainer>
          <View style={styles.container}>
            <Home />
          </View>
        </NavigationContainer>
      </UserProvider>      
    </TextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingTop: Constants.statusBarHeight,
  },
});
