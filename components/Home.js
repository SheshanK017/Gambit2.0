import { LinearGradient } from 'expo-linear-gradient';
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const imageSource = require("../assets/TaskGambit-Logo.png"); // Assuming this is the path to your image

export default function Home({ navigation }) {
  const handleContinuePress = () => {
    navigation.navigate('contactpage');
  };
  const handleContinuePress1 = () => {
    navigation.navigate('Login');
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
    bottom: 50
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
    backgroundColor: '#0B1D39',
    borderWidth: 4,
    bottom: 180,
    borderRadius: 40

  },
  buttonText: {


    color: '#ffffff',
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: "Sequel_Demo"
  },
});
