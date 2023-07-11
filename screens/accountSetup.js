import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';


const AccountSetup = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('Gender');
  const [fullName, setfullName] = useState('');
  const [birthDay, setbirthDay] = useState('');
  const [address, setaddress] = useState('');
  const [NET, setNET] = useState('');
  const [relation, setrelation] = useState('');
  const [ECN, setECN] = useState('');
  const [emergencyEmail, setEmergencyEmail] = useState('');

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
      <View style={styles.separator} />
      <Text style={styles.personalInfo}>Personal Information</Text>
      <Text style={styles.EmergencyInfo}>Emergency Contact Information</Text>
      <Text style={styles.fullNameTitle}>Full Name</Text>
      <Text style={styles.birthDayTitle}>Date of Birth</Text>
      <Text style={styles.addressTitle}>Address</Text>
      <Text style={styles.ageTitle}>Age</Text>
      <Text style={styles.genderTitle}>Gender</Text>
      <View style={styles.separatorPersonalInfo} />
      <View style={styles.separatorEmergency} />
      <Text style={styles.nameEmergencyTitle}>Name of Emergency Contact</Text>
      <Text style={styles.relationTitle}>Relation</Text>
      <Text style={styles.contactNumTitle}>Emergency Contact Number</Text>
      <Text style={styles.contactNumDesctiption}>Enter a phone number to {'\n'}receive SMS alerts when a {'\n'}crash is detected.</Text>
      <Text style={styles.emailDesctiption}>Enter a email address to {'\n'}receive email alerts when{'\n'} a crash is detected.</Text>
      <Text style={styles.emailEmergencyTitle}>Emergency Person Email</Text>

      <TouchableOpacity style={styles.backButton} onPress={() => handleButtonPress('Values')}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.nextButton} onPress={handleButtonPress}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.fullName}
        placeholder="Full Name"
        value={fullName}
        onChangeText={setfullName}
        placeholderTextColor="#9E9E9E"
      />
      <TextInput
        style={styles.birthDay}
        placeholder="Date of Birth"
        value={birthDay}
        onChangeText={setbirthDay}
        placeholderTextColor="#9E9E9E"
      />
      <TextInput
        style={styles.address}
        placeholder="Address"
        value={address}
        onChangeText={setaddress}
        placeholderTextColor="#9E9E9E"
      />
      <TextInput
        style={styles.age}
        placeholder="Age"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="#9E9E9E"
      />
      <TextInput
        style={styles.NET}
        placeholder="Name of Emergency Contact"
        value={NET}
        onChangeText={setNET}
        placeholderTextColor="#9E9E9E"
      />
       <TextInput
        style={styles.relation}
        placeholder="Relation"
        value={relation}
        onChangeText={setrelation}
        placeholderTextColor="#9E9E9E"
      />
      <TextInput
        style={styles.EmergencyCN}
        placeholder="Emergency Contact Number"
        value={ECN}
        onChangeText={setECN}
        placeholderTextColor="#9E9E9E"
      />
      <TextInput
        style={styles.emergencyEmail}
        placeholder="Emergency Person Email Address"
        value={emergencyEmail}
        onChangeText={setEmergencyEmail}
        placeholderTextColor="#9E9E9E"
      />
      <View style={styles.genderDropdownContainer}>
          <Picker
            selectedValue={gender}
            onValueChange={(itemValue) => setGender(itemValue)}
            style={styles.genderDropdown}
          >
             <Picker.Item label="Gender" value="" style={styles.genderDefault} />
            <Picker.Item label="Male" value="male" />
            <Picker.Item label="Female" value="female" />
            <Picker.Item label="Others" value="others" />
          </Picker>
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

  separatorPersonalInfo: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.4)',
    width: '100%',
    top: 130,
  },

  personalInfo: {
    fontSize: 13,
    fontWeight: 'bold',
    top: 5,
    right: 90,
    color: '#FFFF',
  },

  EmergencyInfo: {
    fontSize: 13,
    fontWeight: 'bold',
    top: 250,
    right: 50,
    color: '#FFFF',
  },

  fullNameTitle: {
    fontSize: 10,
    fontWeight: 'regular',
    top: 5,
    right: 135,
    color: '#FFFF',
  },

  fullName: {
    width: 150,
    height: 30,
    bottom: 285,
    right: 85,
    fontSize: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 6,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    color: '#FFF',
  },

  birthDayTitle: {
    fontSize: 10,
    fontWeight: 'regular',
    bottom: 10,
    left: 45,
    color: '#FFFF',
  },

  birthDay: {
    width: 150,
    height: 30,
    bottom: 315,
    right: -88,
    fontSize: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 6,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    color: '#FFF',
  },

  addressTitle: {
    fontSize: 10,
    fontWeight: 'regular',
    top: 40,
    right: 130,
    color: '#FFFF',
  },

  address: {
    width: 320,
    height: 30,
    bottom: 280,
    right: -5,
    fontSize: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 6,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    color: '#FFF',
  },

  age: {
    width: 150,
    height: 30,
    bottom: 245,
    right: 80,
    fontSize: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 6,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    color: '#FFF',
  },

  ageTitle: {
    fontSize: 10,
    fontWeight: 'regular',
    top: 90,
    right: 140,
    color: '#FFFF',

  },
  genderDropdownContainer: {
    width: 150,
    height: 30,
    bottom: 395,
    right: -88,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 6,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    color: '#FFF',
  },
  genderDropdown: {
    flex: 1, // Take up the available space inside the container
    color: 'rgba(255, 255, 255, 0.5)', // Use a color with reduced opacit
    top: -10,
    right: 15,
  },
  
  genderDefault: {
    fontSize: 10, // Adjust the font size as needed
    color: '#FFFF',
    
  },

  genderTitle: {
    fontSize: 10,
    fontWeight: 'regular',
    top: 75,
    left: 30,
    color: '#FFFF',
  },

  separatorEmergency: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.4)',
    width: '100%',
    top: 410,
  },

  nameEmergencyTitle: {
    fontSize: 10,
    fontWeight: 'regular',
    top: 195,
    right: 80,
    color: '#FFFF',
  },

  NET: {
    width: 150,
    height: 30,
    top: -135,
    right: 80,
    fontSize: 8,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 6,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    color: '#FFF',
  },

  relationTitle: {
    fontSize: 10,
    fontWeight: 'regular',
    top: 180,
    left: 40,
    color: '#FFFF',
  },

  relation: {
    width: 150,
    height: 30,
    bottom: 165,
    left: 90,
    fontSize: 8,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 6,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    color: '#FFF',
  },

  contactNumTitle: {
    fontSize: 10,
    fontWeight: 'regular',
    top: 233,
    right: 80,
    color: '#FFFF',
  },

  contactNumDesctiption: {
    fontSize: 10,
    fontWeight: 'regular',
    top: 230,
    left: 90,
    color: 'rgba(255, 255, 255, 0.5)',
  },

  EmergencyCN: {
    width: 150,
    height: 30,
    left: -75,
    bottom: 125,
    fontSize: 8,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 6,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    color: '#FFF',
  },

  emailEmergencyTitle: {
    fontSize: 10,
    fontWeight: 'regular',
    top: 200,
    right: 85,
    color: '#FFFF',
  },

  emailDesctiption: {
    fontSize: 10,
    fontWeight: 'regular',
    top: 250,
    left: 90,
    color: 'rgba(255, 255, 255, 0.5)',
  },

  emergencyEmail: {
    width: 150,
    height: 30,
    left: -75,
    bottom: 85,
    fontSize: 8,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 6,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    color: '#FFF',
  },

  backButton: {
    height: 40,
    width: 100,
    top: 280,
    right: 80,
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
    top: 245,
    left: 80,
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

export default AccountSetup;
