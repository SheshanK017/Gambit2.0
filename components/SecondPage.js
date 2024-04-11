import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const SecondPage = () => {
 
  return (
    <ImageBackground source={require("../assets/Union.png") }>
   <View style={styles.conttt}>
    <View style={styles.ss}>
    <Text style={{fontSize:15 , fontWeight:"500" , color:"#4285F4"}}>Sign in using </Text>
    </View>
   
    <TouchableOpacity  style={styles.buttonContainer}>
              <View style={styles.innerContainer}>
                <Image source={require("../assets/googleIcon.png")} style={styles.googleIcon} />
                <Text style={styles.buttonText}> Google</Text>
              </View>
                
            </TouchableOpacity>
           

            
            
   </View>
   </ImageBackground>
  )
}
const styles=StyleSheet.create({
cont:{
    backgroundColor:"white",
    justifyContent:"center",
    textAlign:"left",
    
    
},
conttt:{
alignItems:"center",
marginTop:400

},
contttt:{
    fontSize:30,
    paddingVertical:10,
    paddingHorizontal:60,
    textAlign:"right"
},
ss:{
    marginBottom:15
},
buttonContainer: {
    backgroundColor: '#fff', 
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal:40 
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleIcon: {
    width: 30, 
    height: 30, 
    marginRight: 10,
  },
  buttonText: {
    fontSize: 30, 
    color: '#4285F4', 
  },
 
  
})

export default SecondPage;