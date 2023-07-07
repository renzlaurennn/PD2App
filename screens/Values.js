// Values.js
import React, { useEffect, useState, useLayoutEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { db, ref, onValue } from '../firebase';
import { update } from 'firebase/database';

let timer;
let forceStop = false;

const Values = ({ onCrashDetected }) => {
  const [X, setX] = useState(0);
  const [Y, setY] = useState(0);
  const [Z, setZ] = useState(0);
  const [Latitude, setLatitude] = useState(0);
  const [Longitude, setLongitude] = useState(0);
  const [TimeTaken, setTimeTaken] = useState(0);
  const [countdown, setCountdown] = useState(5);
  const [crashType, setCrashType] = useState('');
  const[CountdownStat, setCountdownStat] = useState('0');

  const navigation = useNavigation();

  useEffect(() => {
    const data = ref(db);

    onValue(data, (snapshot) => {
      setX(snapshot.val().X);
      setY(snapshot.val().Y);
      setZ(snapshot.val().Z);
      setLatitude(snapshot.val().Latitude);
      setLongitude(snapshot.val().Longitude);
      setTimeTaken(snapshot.val().TimeTaken);
      // setCountdownStat(snapshot.val().CountdownStat);
      const newCountdownStat = snapshot.val().CountdownStat;

      window.Longitude = snapshot.val().Longitude;
      window.Latitude = snapshot.val().Latitude;
      window.TimeTaken = snapshot.val().TimeTaken;
      // Check for crashes
      // checkCrashes(snapshot.val().X, snapshot.val().Y, snapshot.val().Z);
      // checkCrashes(snapshot.val().CountdownStat);
      if (newCountdownStat !== CountdownStat) {
        setCountdownStat(newCountdownStat);
        checkCrashes(newCountdownStat);
      }
      
    });
  }, [db]);

  useEffect(() => {
    const data = ref(db);
    if (countdown <= 0) {
      if (crashType == "Major" && forceStop == false){
        const datapass = { 
          SendSMSStat: 2,
         }
        update(data, datapass);
      } else if (crashType == "Minor" && forceStop == false){
        const datapass = { 
          SendSMSStat: 1,
         }
        update(data, datapass);
      }
      forceStop = false;
      setCrashType("");
      stopCountdown();
    }
  }, [countdown]);

  const checkCrashes = (CountdownStat) => {
    const data = ref(db);

    if (CountdownStat == 2) {
      console.log("Major Crash");
      setCrashType("Major");
      // Major crash detected
      // Start the countdown timer
      countdownFunc(5);
      const datapass = { 
        CountdownStat: 0
       }
      update(data, datapass);
    } else if (CountdownStat == 1) {
      console.log("Minor Crash");
      setCrashType("Minor");
      // Major crash detected
      // Start the countdown timer
      countdownFunc(5);
      const datapass = { 
        CountdownStat: 0
       }
      update(data, datapass);
    }
  };

  const countdownFunc = (seconds) => {
    clearInterval(timer);
    setCountdown(seconds);

    timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);
  };

  const stopCountdown = () => {
    clearInterval(timer);
    timer = null;
    setCountdown(0);
    console.log("Countdown Force Stop");
  }

  const sendSMS = (crashType) => {
    // Implement your SMS sending logic here
    // You can use any SMS sending library or API
    console.log(`Sending SMS for ${crashType} crash`);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: '#34315E',
      },
      headerTintColor: '#FFF',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    });
  }, [navigation]);

  const Press = () => {
    forceStop = true;
    stopCountdown();
  };

  return (
    <View style={[styles.container, { backgroundColor: '#34315E' }]}>
      <Text style={styles.title}>Crash Detection</Text>
      <TouchableOpacity style={styles.button} onPress={Press}>
        <Text style={styles.buttonText}>Cancel S.O.S</Text>
      </TouchableOpacity>
      {countdown > 0 && (
        <Text style={styles.countdownText}>Countdown: {countdown}</Text>
      )}
      <Text style={styles.xValue}>X: {X}</Text>
      <Text style={styles.yValue}>Y: {Y}</Text>
      <Text style={styles.zValue}>Z: {Z}</Text>
      <Text style={styles.LatitudeValue}>Latitude: {Latitude}</Text>
      <Text style={styles.LongitudeValue}>Longitude: {Longitude}</Text>
      <Text style={styles.TimeTakenValue}>TimeTaken: {TimeTaken}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    position: 'absolute',
    top: 130,
    left: 130,
    transform: [{ translateX: -50 }, { translateY: -50 }],
    color: 'white',
  },
  xValue: {
    fontSize: 12,
    color: 'white',
    position: 'absolute',
    bottom: 120,
    left: 50,
  },
  yValue: {
    fontSize: 12,
    color: 'white',
    position: 'absolute',
    bottom: 120,
    left: 150,
  },
  zValue: {
    fontSize: 12,
    color: 'white',
    position: 'absolute',
    bottom: 120,
    left: 250,
  },
  LatitudeValue: {
    fontSize: 12,
    color: 'white',
    position: 'absolute',
    left: 20,
    bottom: 50,
  },
  LongitudeValue: {
    fontSize: 12,
    color: 'white',
    position: 'absolute',
    bottom: 50,
    left: 190,
  },
  TimeTakenValue: {
    fontSize: 12,
    color: 'white',
    position: 'absolute',
    bottom: 20,
    left: 100,
  },
  button: {
    width: 150,
    height: 150, // Set the height equal to the width to make it a square
    top: -100,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#DA3939', // Set the background color to your desired color
    borderRadius: 75, // Set the borderRadius to half of the width to make it a circle
    alignItems: 'center',
    justifyContent: 'center', // Center the content vertically and horizontally
  },
  buttonText: {
    color: '#ffff', // Set the button text color to a shade of purple (#6B63F6)
    fontSize: 16,
    fontWeight: 'bold',
  },
  countdownText: {
    fontSize: 20,
    color: 'white',
    position: 'absolute',
    top: 350,
    fontWeight: 'bold',
  },
});

export default Values;
