// emergencyInformation.js
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

const EmergencyInformation = ({ navigation }) => {
  React.useLayoutEffect(() => {
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

  const handleButtonPress = () => {
    navigation.navigate('EmergencyInformation');
  };

  return (
    <View>
      <Text style={styles.title}>Emergency </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default EmergencyInformation;
