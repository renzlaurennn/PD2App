import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

const CrashPage = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: '#34315E',
      },
      headerTintColor: '#FFF',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTitle: '',
    });
  }, [navigation]);

  const handleButtonPress = (destination) => {
    navigation.navigate(destination);
  };

  return (
    <View style={styles.container}>
    
      <Text style={styles.title}>BikeBox is not connected</Text> 
      <View style={styles.separator} />
      <Text style={styles.userAcct}>Welcome to BikeBox!</Text>
      <Image source={require('../assets/settingLogo.png')} style={styles.logo} resizeMode="contain" />
      
      <Text style={styles.descriptionHeader}>
        No Crash Detected
      </Text>
      <Text style={styles.description}>
        Once the sensor read potential it would trigger the alarm countdown of the system
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('Values')}>
        <Text style={styles.buttonText}>See how sensor works</Text>
      </TouchableOpacity>
        <Image source={require('../assets/warning.png')} style={styles.logoWarning} resizeMode="contain" />
      <View style={styles.rectanglebgSetup} >
        <Text style={styles.textSetup}>
            You haven't setup your accout.
        </Text>
        <TouchableOpacity style={styles.skipText} onPress={() => handleButtonPress('Values')}>
        <Text style={styles.setUpAcctNow}> Set up account now.</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#34315E',
  },
  logo: {
    width: 30,
    height: 25,
    bottom: 280,
    left: 145,
  },
  logoWarning: {
    width: 30,
    height: 25,
    bottom: 320,
    right: 120,
  },
  title: {
    fontSize: 10,
    fontWeight: 'regular',
    top: -220,
    color: '#FFFF',
    marginTop: 100,
    marginBottom: 20,
  },
  rectanglebgSetup: {
    width: 300,
    height: 50,
    top: -360,
    marginBottom: 10,
    backgroundColor: '#ec942c',
    justifyContent: 'center',
    borderRadius: 0,
    opacity: 0.7,

  },
  textSetup: {
    color: 'white',
    fontSize: 9,
    fontWeight: 'regular',
    textAlign: 'center',
    alignSelf: 'center',
  },
  setUpAcctNow: {
    color: '#f9e154',
    fontSize: 9,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#FFF',
    width: '100%',
    marginBottom: 10,
    bottom: 190,
  },
  userAcct: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
    top: -240,
    right: 80,
    color: '#FFFF',
  },
  descriptionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFF',
    bottom: 90,
  },
  description: {
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.81)',
    fontSize: 10,
    bottom: 80,
  },
  button: {
    width: 200,
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#6B63F6',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffff',
    fontSize: 13,
    fontWeight: 'bold',
  },

});

export default CrashPage;
