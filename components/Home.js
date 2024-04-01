
import React from "react";
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const s=require("/home/sheshank/Desktop/taskgambit/gambit/assets/Frame 33.jpg");

export default function Home({navigation}){
    const handleContinuePress = () => {
        navigation.navigate('SecondPage');
      };
    return(
        <ImageBackground source={require("/home/sheshank/Desktop/taskgambit/gambit/assets/Union.png")} style={styles.backgroundImage} >
        <View style={styles.container}>
            <View style={{paddingBottom:20}}>
            <Text style={styles.centeredText} > Gamify Your Tasks</Text>
            </View>
            <View style={styles.textContainer} >
            <Text style={styles.centeredText1}>{'Embark on a thrilling challenge with random ally!. If they slip, the victory and the cash are all yours'}.</Text>
            </View>
            
<View style={{paddingTop:90}}>
<Image source={s} style={styles.image1}/>
</View>

<TouchableOpacity
        style={styles.but}
        onPress={handleContinuePress}
      >
       
        
        <Text style={styles.buttonText}>Continue</Text>
       
      </TouchableOpacity>


        </View>
        </ImageBackground>

    )
}
const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch' or 'contain'
        justifyContent: 'center',
      },
    container: {
      alignItems: 'center',
      justifyContent: 'flex-start', 
      marginTop:80
      
    },
    centeredText: {
      fontSize: 20,
      textAlign: 'center',
      color:"#219ebc",
      fontWeight:"900",
      fontSize:30
    },
    centeredText1:{
        fontSize : 15,
        textAlign:"centre",
        fontWeight:"600"
    },
    image1:{
        width:250,
        height:250,
        resizeMode: 'contain',
        
    },
    textContainer: {
        borderWidth: 3,
        borderColor: '#219ebc',
        padding: 10,
        paddingTop :20,
        borderRadius: 10,
        marginTop:30,
        width:300
      },
      but:{
    backgroundColor: '#219ebc',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop:60,
    width:200
        
      },
      buttonText :{
        color:"white",
        textAlign:"center"
      }
  });