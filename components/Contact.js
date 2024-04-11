import { LinearGradient } from 'expo-linear-gradient';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { auth } from '../config/firebase';

const s = require("../assets/User_cicrle_light.png");
const s1 = require("../assets/Group 23.png");

const Contact = ({navigation}) => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = () => {
    // Here you can handle form submission
    console.log('Name:', name);
    console.log('Nickname:', nickname);
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    navigation.navigate('FindPartner', { name });
  };

  const onHandleSignup = () => {
    if (email !== '' && password !== '') {
  createUserWithEmailAndPassword(auth, email, password)
        .then(() => console.log('Signup success'))
        .catch((err) => Alert.alert("Login error", err.message));
    }
  };

  return (
    <LinearGradient
    colors={[
      '#2d3541',
      '#5b5f6a',
      '#8c8e95',
      '#bfbfc3',
      '#f4f4f4',
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
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={text => setName(text)}
        />

     

        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={text => setEmail(text)}
          keyboardType="email-address"
        />

        <Text style={styles.label}>Phone Number:</Text>
        <TextInput
          style={styles.input}
          value={phoneNumber}
          onChangeText={text => setPhoneNumber(text)}
          keyboardType="phone-pad"
        />

        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={onHandleSignup,handleSubmit}
        >
          <Text style={styles.buttonText}>Continue</Text>
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
  image1: {
    width: 200,
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
    color: '#0B1D39',
  },
  input: {
    height: 40,
    borderColor: '#0B1D39',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
    color: 'white',
    backgroundColor:'#0B1D39'
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginTop: 30,
    width: 200,
    alignSelf: 'center',
    borderColor: '#0B1D39',
    borderWidth: 2,
    backgroundColor:'#0B1D39'
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight:"bold"
  },
  dd:{
    color:'#0B1D39',
    fontWeight:"bold",
    fontSize:30
    
  }
});

export default Contact;
