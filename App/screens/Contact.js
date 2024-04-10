import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
const s=require("../../assets/User_cicrle_light.png");
const s1=require("../../assets/Group 23.png");
const Contact = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = () => {
    // Here you can handle form submission
    console.log('Name:', name);
    console.log('Nickname:', nickname);
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
    console.log('Address:', address);
  };

  return (
    <>
   
<View style={styles.imageContainer}>
    <Image source={s1} style={styles.image1} resizeMode="contain"  />
  </View>
    <View style={styles.imageContainer}>
    <Image source={s} style={styles.image} />
  </View>
    <View style={styles.container}>
       

      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={text => setName(text)}
      />

      <Text style={styles.label}>Nickname:</Text>
      <TextInput
        style={styles.input}
        value={nickname}
        onChangeText={text => setNickname(text)}
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

      <Text style={styles.label}>Address:</Text>
      <TextInput
        style={[styles.input, {height: 100}]}
        value={address}
        onChangeText={text => setAddress(text)}
        multiline
      />

<TouchableOpacity
        style={styles.but}
        onPress={handleSubmit}
      >
       
        
        <Text style={styles.buttonText}>Continue</Text>
       
      </TouchableOpacity>
    </View>
    
    </>
  );
};

const styles = StyleSheet.create({
    imageContainer: {
        alignItems: 'center',
        marginTop: 10,
      },
      image: {
        width: 100,
        height: 100,
      },
      image1: {
        width: 200,
        height: 100,
      },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius:20
  },
  but:{
    backgroundColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop:30,
    width:200,
    marginLeft:'20%'
        
      },
      buttonText :{
        color:"white",
        textAlign:"center"
      }

});

export default Contact;
