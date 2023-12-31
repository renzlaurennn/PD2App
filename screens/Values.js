// Values.js
import React, { useEffect, useState, useLayoutEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Vibration } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { firebaseApp } from '../firebase';
import { update, onValue, getDatabase, ref } from 'firebase/database';
import { Audio } from 'expo-av';

import axios from 'axios'

import { socket } from '../utils/socket'

let timer;
let forceStop = false;

const TARGET_EMAIL = "renzlaurennn@gmail.com"

const alarmSound = new Audio.Sound();

const db = getDatabase(firebaseApp)

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
    // const data = ref(db)

    const refX = ref(db, 'X')
    const refY = ref(db, 'Y')
    const refZ = ref(db, 'Z')

    const refLat = ref(db, 'Latitude')
    const refLon = ref(db, 'Longitude')

    const refTimeTaken = ref(db, 'TimeTaken')
    const refCountdownStat = ref(db, 'CountdownStat')

	  // establish socket connection with PD2-ENS server
	  socket.on()

    onValue(refX, snapshot => setX(snapshot.val()))
    onValue(refY, snapshot => setY(snapshot.val()))
    onValue(refZ, snapshot => setZ(snapshot.val()))
    onValue(refLat, snapshot => setLatitude(snapshot.val()))
    onValue(refLon, snapshot => setLongitude(snapshot.val()))
    onValue(refTimeTaken, snapshot => setTimeTaken(snapshot.val()))
    onValue(refCountdownStat, snapshot => {
      const newCountdownStat = snapshot.val()

      setCountdownStat(newCountdownStat)

      if (newCountdownStat !== CountdownStat) {
        setCountdownStat(newCountdownStat)

        const data = { 
          x: X,
          y: Y,
          z: Z,
          lat: Latitude,
          lon: Longitude
        }

        checkCrashes(newCountdownStat, data)
      }
    })

    return () => {
      // disconnect as soon as the component unmounts
      socket.off()
    }
  }, [X, Y, Z, Latitude, Longitude, CountdownStat]);

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

  const checkCrashes = (countdownStat, crashData) => {
    const data = ref(db);

    if (CountdownStat == 2) {
      console.log("Major Crash");
      setCrashType("Major");
      // Major crash detected
      // Start the countdown timer
      countdownFunc(5, data);
      const datapass = { 
        CountdownStat: 0
      }
      update(data, datapass);
    } else if (CountdownStat == 1) {
      console.log("Minor Crash");
      setCrashType("Minor");
      // Major crash detected
      // Start the countdown timer
      countdownFunc(5, crashData);
      const datapass = { 
        CountdownStat: 0
      }
      update(data, datapass);
    }
  };

  const countdownFunc = (seconds, crashData) => {
    // clearInterval(timer);
    setCountdown(seconds);

    const loadSound = async () => {
      try {
        await alarmSound.loadAsync(require('../alarm.mp3'));
      } catch (error) {
        console.log('Failed to load the sound', error);
      }
    };

    loadSound();

    timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown === 1) {
          Vibration.cancel();
          stopCountdown();
          sendEmail(TARGET_EMAIL, crashData)
          return 0;
        }

        Vibration.vibrate(500);
        playSound();
        
        return prevCountdown - 1;
      });
    }, 1000);
  };

  const stopCountdown = () => {
    clearInterval(timer);
    timer = null;
    setCountdown(0);
    console.log("Countdown Force Stop");
    stopSound();
  };

  const playSound = async () => {
    try {
      await alarmSound.replayAsync();
    } catch (error) {
      console.log('Failed to play the sound', error);
    }
  };

  const stopSound = async () => {
    try {
      await alarmSound.stopAsync();
      await alarmSound.unloadAsync();
    } catch (error) {
      console.log('Failed to stop the sound', error);
    }
  };

  const sendSMS = (crashType) => {
    // Implement your SMS sending logic here
    // You can use any SMS sending library or API
    console.log(`Sending SMS for ${crashType} crash`);
  };

  // method for triggering the Email notification logic
  
  const sendEmail = (email, crashData) => {
	  // send a request for the PD2-ENS server to send an email notification
    const url = "https://pd2-ens.onrender.com/api/v1/mail/notify_email"

    // Email Subject Title
    const data = {
      email,
      subject: "Crash Emergency",
	    payload: {
		    crashType: (crashType.length > 0) ? crashType : "Untriaged Crash",
        location: null
	    }
    }

    if (Latitude > 0 && Longitude > 0) {
      data.payload.location = `${Latitude}, ${Longitude}`
    }

    axios.post(url, data, {
      'Content-Type': 'application/json'
    }).then(res => {
      // show prompt that the request is successful
      console.log(res.data)
    }).catch(err => {
      // show prompt that the request failed
      console.error(err)
    })
  }

  useLayoutEffect(() => {
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

  const Press = () => {
    const data = ref(db);
    const datapass = {
      CheckMPU: false
    }
    update(data, datapass);

    forceStop = true;
    stopCountdown();
  };

  return (
    <View style={[styles.container, { backgroundColor: '#34315E' }]}>
      <Text style={styles.title}>Crash Detection</Text>
      <TouchableOpacity style={styles.button} onPress={Press}>
        <Text style={styles.buttonText}>Cancel S.O.S</Text>
      </TouchableOpacity>
      <Text style={styles.countDownDescription}>Countdown will begin once the system detect potential crash accident</Text>
      {countdown > 0 && (
        <Text style={styles.countdownText}>{countdown}</Text>
      )}
      {/* <Text style={styles.xValue}>X: {X}</Text>
      <Text style={styles.yValue}>Y: {Y}</Text>
      <Text style={styles.zValue}>Z: {Z}</Text> */}
      {/* <Text style={styles.LatitudeValue}>Latitude: {Latitude}</Text>
      <Text style={styles.LongitudeValue}>Longitude: {Longitude}</Text>
      <Text style={styles.TimeTakenValue}>TimeTaken: {TimeTaken}</Text> */}
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
    top: 110,
    left: 130,
    transform: [{ translateX: -50 }, { translateY: -50 }],
    color: 'white',
  },
  countDownDescription: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.81)',
    bottom: 40,
    textAlign: 'center',

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
    fontSize: 40,
    color: 'white',
    position: 'absolute',
    top: 380,
    fontWeight: 'bold',
    textAlign: 'center'
  },
});

export default Values;
