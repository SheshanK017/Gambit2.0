import { LinearGradient } from 'expo-linear-gradient';
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const imageSource = require("../assets/Task_Gambit_Logo.png"); // Assuming this is the path to your image

export default function Home({navigation}) {
  const handleContinuePress = () => {
    navigation.navigate('contactpage');
  };
  const handleContinuePress1= () => {
    navigation.navigate('Login');
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
        <Image source={imageSource} style={styles.image} />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleContinuePress}>
        <Text style={styles.buttonText}>SIGN UP</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleContinuePress1}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    bottom:50
  },
  image: {
    width: 350,
    height: 250,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 30,
    width: 250,
    alignSelf: 'center',
    borderColor: '#0BF6E7',
    borderWidth: 4,
    bottom:180,
    borderRadius:40
    
  },
  buttonText: {
    color: "#0BF6E7",
    textAlign: "center",
    fontWeight:"bold",
    fontSize:20,
    fontFamily:"Tilt Neon"
  },
});
