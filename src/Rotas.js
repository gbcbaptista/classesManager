import React from "react";
import { Home } from './screens/Home';
import { AddStudent } from './screens/AddStudent';
import { Student } from './screens/Student';
import Constants from 'expo-constants';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AccountingProvider } from "./contexts/PaymentContext";
import { DayPickerProvider } from "./contexts/DayPickerContext";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export const HomeScreen = () => {
  return (
    <AccountingProvider>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
          <Stack.Screen name='Student' component={Student} options={{headerShown: false}} />
        </Stack.Navigator>
    </AccountingProvider>
  );
}

export const Rotas = () => {
  
    return (
    <DayPickerProvider>  
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Informations">
          <Tab.Screen name='AddStudent' component={AddStudent}
            options={{
              headerShown: false, 
              tabBarLabel: 'New Students',
              tabBarIcon: ({ color, size }) => (
                <AddStudentIcon />
              ),
            }}
            />
          <Tab.Screen name="Informations" component={HomeScreen} 
            options={{
              headerShown: false, 
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => (
                <HomeIcon />
              ),
            }}
            />
        </Tab.Navigator>
      </NavigationContainer>
    </DayPickerProvider>
    )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingTop: Constants.statusBarHeight,
  },
  content: {
    height: '100%',
  },
  contentIcon: {
    flexDirection: 'row',
    alignContent: 'center',
    color: 'white',
    flexBasis: 30,
    marginLeft: 52,
  },
  studentIcon: {
    zIndex: 1,
    backgroundColor: 'transparent',
    fontSize: 20,
    position: 'absolute',
    right: 15,
    
  },
  plusIcon: {
    zIndex: 10,
    backgroundColor: 'transparent',
    fontSize: 10,
    position: 'absolute',
    right: 8,
    top: 1,
  },
  homeIcon: {
    fontSize: 20,
  }
});

export const AddStudentIcon = () => {
  return(
      <View style={styles.content}>
          <View style={styles.contentIcon}>
              <Text style={styles.plusIcon}>➕</Text>
              <Text style={styles.studentIcon}>🧑‍🎓</Text>
          </View>
      </View>
      
  );
}

export const HomeIcon = () => {
  return(
      <View style={styles.content}>
          <View style={styles.x2}>
              <Text style={styles.homeIcon}>🏠</Text>
          </View>
      </View>
      
  );
}