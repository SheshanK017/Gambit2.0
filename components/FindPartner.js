import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
const handleContinuePress=()=>{
    console.log("done");
}
const FindPartner = () => {
  return (
   <View stylr={styles.cont}>
    <TouchableOpacity
        style={styles.but}
        onPress={handleContinuePress}
      >
       
        
        <Text style={styles.buttonText}>Find Partner</Text>
       
      </TouchableOpacity>


        </View>
   
  )
}
const styles = StyleSheet.create({
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
          },
          cont:{
            alignItems:"center",
            marginTop:"100px",
            flex:1
          }
})

export default FindPartner