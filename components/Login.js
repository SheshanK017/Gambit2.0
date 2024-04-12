import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

const s = require("../assets/login-logo.png");


const Contact = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onHandleLogin = () => {
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => console.log("Login success"))
        .catch((err) => Alert.alert("Login error", err.message));
    }
  };


  const handleSubmit = () => {
    // Here you can handle form submission
    console.log('Email:', email);
    console.log('Password:', password);
    navigation.navigate('FindPartner', { name: 'User Name' }); // Assuming name for demo
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
      {/* <View style={styles.imageContainer}>
        <Text style={styles.dd}> MAKE YOUR PROFILE</Text>
      </View> */}
      <View style={styles.imageContainer}>
        <Image source={s} style={styles.image} />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          autocomplete="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoFocus={true}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          autocomplete="none"
          secureTextEntry={true}
          textContentType="password"
          autoCorrect={false}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity style={styles.button} onPress={onHandleLogin, handleSubmit}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <Text
          style={styles.loginButton} onPress={() => navigation.navigate('contactpage')}
        >
          Don't have an account?
          Register
        </Text>

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
    backgroundColor: '#0B1D39'
  },
  loginButton: {
    marginTop: 20, // Add margin to the top of the login text
    fontSize: 20,
    textAlign: "center",


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
    backgroundColor: '#0B1D39'
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: "bold"
  },
  dd: {
    color: '#0BF6E7',
  },
});

export default Contact;
