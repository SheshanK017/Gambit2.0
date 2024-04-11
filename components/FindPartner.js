import { useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { firestore } from '../config/firebase'; // Import the initialized Firestore instance
import { collection, onSnapshot } from 'firebase/firestore';

const FindPartner = ({navigation}) => {
  const route = useRoute();
  const name = route.params?.name;
 const [groupsCollectionRef, setGroupsCollectionRef] = useState(null);
  const [groups, setGroups] = useState([]);

    useEffect(() => {
    const ref = collection(firestore, 'cbof');
    setGroupsCollectionRef(ref);

    const unsubscribe = onSnapshot(ref, (groups) => {
      console.log('Current groups in database: ', groups);
      const groupsData = groups.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      console.log('Current groups in database: ', groupsData);

      setGroups(groupsData);
    });

    return unsubscribe;
  }, []);


  return (
    <>
      <LinearGradient
        colors={[
          '#380b42', '#391746', '#3a204a', '#3c284d', '#3e3050',
          '#403152', '#413154', '#433256', '#452c57', '#492458',
          '#4d1a57', '#520b55'
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
              {groups.map((group) => (
            <TouchableOpacity key={group.id}>
              <Text>{group.Username}</Text>
              <Text>{group.Task}</Text>
            </TouchableOpacity>
        ))}
          </View>
          <TouchableOpacity
            style={styles.but}
            onPress={()=>{}}
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
      borderColor: '#0BF6E7',
      borderWidth: 4,
            
          },
          buttonText :{
            color:"#0BF6E7",
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
            color:"#0BF6E7"
            
          },
          col:{
            color:"red"
          },
          tt:{
            fontSize:20,
            color:"#0BF6E7"
          }
})

export default FindPartner