import React, { useState, useRef } from 'react';
import { Animated, LayoutAnimation, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const AnimatedContent = () => {
  // Option 1: Using Animated.Value (uncomment for this approach)
  // const [animatedMarginTop] = useState(new Animated.Value(100));
  // const marginTopRef = useRef(animatedMarginTop);

  // Option 2: Using LayoutAnimation (uncomment for this approach)
  const [isVisible, setIsVisible] = useState(true); // Initially visible

  const playAnimation = () => {
    // Option 1: Using Animated.Value (uncomment for this approach)
    // Animated.timing(marginTopRef.current, {
    //   toValue: 10,
    //   duration: 1000,
    //   useNativeDriver: true,
    // }).start();

    // Option 2: Using LayoutAnimation (uncomment for this approach)
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };

  return (
    <View style={styles.container}>
      {/* Option 1: Using Animated.Value (uncomment for this approach)
      <Animated.View style={[styles.content, { marginTop: marginTopRef.current }]}> */}

      {/* Option 2: Using LayoutAnimation (uncomment for this approach)
      {isVisible && ( */}
        <View style={styles.content}>
          <Text style={styles.text}>This is the content!</Text>
          <TouchableOpacity style={styles.button} onPress={playAnimation}>
            <Text style={styles.buttonText}>Press Me</Text>
          </TouchableOpacity>
        </View>
      {/* )} */}

      <TouchableOpacity style={styles.triggerButton} onPress={playAnimation}>
        <Text style={styles.buttonText}>Trigger Animation</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AnimatedContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end', // Align content to bottom
  },
  content: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  triggerButton: { // Optional trigger button
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
});
