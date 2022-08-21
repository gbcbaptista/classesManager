import React from "react";
import { Home } from './screens/Home';
import { AddStudent } from './screens/AddStudent';
import { Student } from './screens/Student';
import Constants from 'expo-constants';
import { SafeAreaView, StyleSheet, View, } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HeaderArea } from "./screens/Home/components/HeaderArea";


const Stack = createNativeStackNavigator();

export const Rotas = () => {
  
    return (
      <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
      >
          <Stack.Screen 
          name='Home' 
          component={Home}
          options={{
            headerShown: false
        }}
      />
          <Stack.Screen name='AddStudent' component={AddStudent} />
          <Stack.Screen name='Student' component={Student} />
      </Stack.Navigator>
    </NavigationContainer>
    )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingTop: Constants.statusBarHeight,
  },
});