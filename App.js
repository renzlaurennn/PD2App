import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomePage from './screens/welcomePage';
import Values from './screens/Values';


import { sendEmail } from './api/email';

const Stack = createStackNavigator();

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
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomePage} />
        <Stack.Screen name="Values">
          {(props) => <Values {...props} onCrashDetected={handleCrashDetected} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
