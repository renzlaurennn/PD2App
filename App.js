import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomePage from './screens/welcomePage';
import Values from './screens/Values';
import EmergencyInformation from './screens/emergencyInformation';
import ComfortPage from './screens/comfortPage';

import { sendEmail } from './api/email';

const Stack = createStackNavigator();
const RootStack = createStackNavigator();

const MainStack = () => (
  <Stack.Navigator initialRouteName="Welcome">
    <Stack.Screen name="Welcome" component={WelcomePage} />
    <Stack.Screen name="Values" component={Values} />
  </Stack.Navigator>
);

export default function App() {
  const handleCrashDetected = (crashType) => {
    sendEmail(crashType)
      .then(() => {
        console.log('Email sent successfully');
      })
      .catch((error) => {
        console.log('Email sending failed', error);
      });
  };

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <RootStack.Navigator screenOptions={{ presentation: 'modal' }}>
        <RootStack.Screen
          name="Main"
          component={MainStack}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="ComfortPage"
          component={ComfortPage}
          options={{ presentation: 'modal' }}
        />
        <RootStack.Screen
          name="EmergencyInformation"
          component={EmergencyInformation}
          options={{ presentation: 'modal' }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});