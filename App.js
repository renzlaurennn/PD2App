import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomePage from './screens/welcomePage';
import Values from './screens/Values';
import ComfortPage from './screens/comfortPage';
import CallForEmergency from './screens/callForEmegency';
import CrashPage from './screens/crashPage';
import AccountSetup from './screens/accountSetup';
import setSensor from './screens/setSensor';


const Stack = createStackNavigator();
const RootStack = createStackNavigator();

const MainStack = () => (
  <Stack.Navigator initialRouteName="Welcome">
    <Stack.Screen name="Welcome" component={WelcomePage} />
    <Stack.Screen name="Values" component={Values} />
    <Stack.Screen name="ComfortPage" component={ComfortPage} />
    <Stack.Screen name="CallForEmergency" component={CallForEmergency} />
    <Stack.Screen name="CrashPage" component={CrashPage} />
    <Stack.Screen name="AccountSetup" component={AccountSetup} />
    <Stack.Screen name="setSensor" component={setSensor} />

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
          name="CallForEmergency"
          component={CallForEmergency}
          options={{ presentation: 'modal' }}
        />
        <RootStack.Screen
          name="CrashPage"
          component={CrashPage}
         options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="AccountSetup"
          component={AccountSetup}
         options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="setSensor"
          component={setSensor}
         options={{ headerShown: false }}
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
