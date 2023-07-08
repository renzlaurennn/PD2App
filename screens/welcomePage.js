import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

const WelcomePage = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: '#34315E',
      },
      headerTintColor: '#FFF',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTitle: "decide-later", 
    });
  }, [navigation]);

  const handleButtonPress = (destination) => {
    navigation.navigate(destination);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/welcome.png')} style={styles.logo} resizeMode="contain" />
      <Text style={styles.title}>Welcome to BikeBox!</Text>
      <Text style={styles.description}>Introducing BikeBox, the app that prioritizes cyclist safety. With crash detection technology and real-time monitoring, BikeBox provides immediate alerts in case of an impact. Additionally, BikeBox's advanced geo-mapping feature automatically contacts the local emergency hotline if an accident occurs</Text>
      <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('ComfortPage')}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.skipText} onPress={() => handleButtonPress('Values')}>
        <Text style={styles.skipText}>Skip for now</Text>
      </TouchableOpacity>
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
    width: 200,
    height: 200,
    top: -60,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    top: -50,
    color: '#FFFF',
  },
  description: {
    fontSize: 10,
    top: -30,
    textAlign: 'center',
    marginLeft: 20,
    marginRight: 20,
    color: 'rgba(255, 255, 255, 0.81)',
    lineHeight: 16,
  },
  button: {
    width: 150,
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#6B63F6',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  skipText: {
    marginTop: 12,
    color: '#FFF',
    fontSize: 14,
  },
});

export default WelcomePage;
