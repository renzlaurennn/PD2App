import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';


const SetSensor = ({ navigation }) => {
  const [minorInput, setMinorInput] = useState('');
  const [majorInput, setMajorInput] = useState('');
  const [GPS, setGPS] = useState('');
  

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: '#34315E',
      },
      headerTintColor: '#FFF',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 13,
        top: 2,
      },
      headerTitle: 'Setup your account',
    });
  }, [navigation]);

  const handleButtonPress = () => {
    navigation.navigate('setSensor'); // Redirect to setSensor screen
  };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Set sensor crash values</Text>
        <Text style={styles.title2}>GPS Location</Text>
        <Text style={styles.description}>
        Default sensor thresholds: Minor crashes: 40, Major crashes: 40. If you find that the crash detection is too sensitive or not sensitive enough, you can customize these values to suit your preference. Otherwise, you can leave them as they are.
      </Text>
      <Text style={styles.descriptionGPS}>
        Default sensor thresholds: Minor crashes: 40, Major crashes: 40. If you find that the crash detection is too sensitive or not sensitive enough, you can customize these values to suit your preference. Otherwise, you can leave them as they are.
      </Text>
      <Text style={styles.minorDesc}>Accelerometer Minor Crashes threshold</Text>
      <Text style={styles.majorDesc}>Accelerometer Major Crashes threshold</Text>
      <Text style={styles.gpsRadius}>GPS Radius</Text>
      <Text style={styles.learnMoreAbout}>Learn more about accelerometer</Text>
      <Text style={styles.learnMoreAbout2}>Learn more about accelerometer</Text>
      <Text style={styles.learnMoreAboutGPS}>Learn more about GPS</Text>
      <View style={styles.separator} />
      <View style={styles.separator2} />
      <View style={styles.separator3} />

      <TouchableOpacity style={styles.backButton} onPress={() => handleButtonPress('Values')}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.nextButton} onPress={handleButtonPress}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
      
      <TextInput
        style={styles.minorInput}
        placeholder="Minor Threshold"
        value={minorInput}
        onChangeText={setMinorInput}
        placeholderTextColor="#9E9E9E"
      />
       <TextInput
        style={styles.majorInput}
        placeholder="Major Threshold"
        value={majorInput}
        onChangeText={setMajorInput}
        placeholderTextColor="#9E9E9E"
      />
      <TextInput
        style={styles.GPS}
        placeholder="GPS"
        value={GPS}
        onChangeText={setGPS}
        placeholderTextColor="#9E9E9E"
      />

      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#34315E',
    },
    
    title: {
      fontSize: 12,
      fontWeight: 'bold',
      top: 30,
      left: 10,
      color: '#FFFF',
    },

    title2: {
      fontSize: 12,
      fontWeight: 'bold',
      top: 370,
      left: 10,
      color: '#FFFF',
    },

    separator: {
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(255, 255, 255, 0.4)',
      width: '100%',
      bottom: 50,
    },

    separator2: {
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(255, 255, 255, 0.4)',
      width: '100%',
      top: 160,
    },

    separator3: {
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(255, 255, 255, 0.4)',
      width: '100%',
      top: 360,
    },

    description: {
      fontSize: 8,
      top: 40,
      textAlign: 'left',
      left: 10,
      marginRight: 10,
      color: 'rgba(255, 255, 255, 0.81)',
    },

    descriptionGPS: {
      fontSize: 8,
      top: 350,
      textAlign: 'left',
      left: 10,
      marginRight: 10,
      color: 'rgba(255, 255, 255, 0.81)',
    },

    minorDesc: {
      fontSize: 10,
      top: 60,
      left: 10,
      color: 'rgba(255, 255, 255, 0.81)',
    },

    majorDesc: {
      fontSize: 10,
      top: 140,
      left: 10,
      color: 'rgba(255, 255, 255, 0.81)',
    },

    gpsRadius: {
      fontSize: 10,
      top: 335,
      left: 10,
      color: 'rgba(255, 255, 255, 0.81)',
    },


    minorInput: {
      width: 150,
      height: 30,
      bottom: 85,
      left: 10,
      fontSize: 8,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 6,
      paddingHorizontal: 10,
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      color: '#FFF',
    },

    majorInput: {
      width: 150,
      height: 30,
      top: -20,
      left: 10,
      fontSize: 8,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 6,
      paddingHorizontal: 10,
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      color: '#FFF',
    },

    GPS: {
      width: 150,
      height: 30,
      top: 160,
      left: 10,
      fontSize: 8,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 6,
      paddingHorizontal: 10,
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      color: '#FFF',
    },

    learnMoreAbout: {
      top: 40,
      fontSize: 8,
      left: 190,
      color:'rgba(250, 255, 0, 0.6)',
    },

    learnMoreAbout2: {
      top: 130,
      fontSize: 8,
      left: 190,
      color:'rgba(250, 255, 0, 0.6)',
    },

    learnMoreAboutGPS: {
      top: 325,
      fontSize: 8,
      left: 190,
      color:'rgba(250, 255, 0, 0.6)',
    },

    backButton: {
      height: 40,
      width: 100,
      top: 390,
      left: 50 ,
      paddingVertical: 10,
      paddingHorizontal: 20,
      backgroundColor: 'rgba(128, 128, 128, 0.7)', // Faded gray background color
      borderRadius: 8,
      alignItems: 'center',
      borderWidth: 1,
      borderColor: 'black', // Black outline
    },
  
    nextButton: {
      height: 40,
      width: 100,
      top: 350,
      left: 200,
      paddingVertical: 10,
      paddingHorizontal: 20,
      backgroundColor: '#6B63F6',
      borderRadius: 8,
      alignItems: 'center',
    },

    backButtonText: {
      color: '#ffff',
      fontSize: 13,
      fontWeight: 'bold',
    },
  
    nextButtonText: {
      color: '#ffff',
      fontSize: 13,
      fontWeight: 'bold',
    },

   


    
  });
  
  export default SetSensor;
  