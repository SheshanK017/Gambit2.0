import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
const s = require("../assets/User_cicrle_light.png");

const Contact = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    // Here you can handle form submission
    console.log('Email:', email);
    console.log('Password:', password);
    navigation.navigate('FindPartner', { name: 'User Name' }); // Assuming name for demo
  };

  return (
    <LinearGradient
      colors={[
        '#380b42', '#391746', '#3a204a', '#3c284d', '#3e3050',
        '#403152', '#413154', '#433256', '#452c57', '#492458',
        '#4d1a57', '#520b55'
      ]}
      style={styles.container}
    >
      <View style={styles.imageContainer}>
        <Text style={styles.dd}> MAKE YOUR PROFILE</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={s} style={styles.image} />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={text => setEmail(text)}
          keyboardType="email-address"
        />

        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  image: {
    width: 100,
    height: 100,
  },
  formContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    color: '#0BF6E7',
  },
  input: {
    height: 40,
    borderColor: '#0BF6E7',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
    color: '#0BF6E7',
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginTop: 30,
    width: 200,
    alignSelf: 'center',
    borderColor: '#0BF6E7',
    borderWidth: 2,
  },
  buttonText: {
    color: '#0BF6E7',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  dd: {
    color: '#0BF6E7',
  },
});

export default Contact;
