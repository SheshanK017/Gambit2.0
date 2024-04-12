import { useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { firestore } from '../config/firebase'; // Import the initialized Firestore instance


const FindPartner = ({navigation}) => {
  const route = useRoute();
  const name = route.params?.name;
  const handleContinuePress=()=>{
    navigation.navigate('TaskSelection');
  }

  return (
    <>
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
        <View style={styles.cont}>
          <View style={styles.hello}>
            <Text style={styles.hell}>
              Hello !!!! <Text style={styles.col}>{name}</Text>
            </Text>
            <Text style={styles.tt}>
              Account Successfully Created.
            </Text>
             
          </View>
          <TouchableOpacity
            style={styles.but}
            onPress={handleContinuePress}
          >
            <Text style={styles.buttonText}>
              FIND PARTNER
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center content vertically
    alignItems: 'center',
  },
    but:{
      paddingVertical: 15,
      paddingHorizontal: 30,
      borderRadius: 30,
      marginTop: 30,
      width: 200,
      alignSelf: 'center',
      borderColor: '0B1D39',
      borderWidth: 4,
      backgroundColor:'#0B1D39'
            
          },
          buttonText :{
            color: 'white',
            textAlign:"center",
            fontWeight:"800",
            fontSize:16
          },
          cont:{
            alignItems:"center",
            marginTop:"100px",
            flex:1
          },
          hello:{
            marginTop:300,
            marginBottom:70
          },
          hell:{
            fontSize:30,
            fontWeight:"bold",
            color: '#0B1D39',
            
          },
          col:{
            color:"red"
          },
          tt:{
            fontSize:20,
            color: '#0B1D39',
          }
})

export default FindPartner