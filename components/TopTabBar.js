import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const TopTabBar = ({ navigation, timerValue, coinsLeft }) => {
  const [isTimerVisible, setIsTimerVisible] = useState(false);

  const handleTimerPress = () => {
    // Handle timer toggle or navigation
    setIsTimerVisible(!isTimerVisible);
    // (Optional) If applicable, navigate to a Timer screen:
    // navigation.navigate('Timer');
  };

  return (
    <View style={styles.container}>
      {/* Timer button */}
      <TouchableOpacity onPress={handleTimerPress}>
        <Text style={styles.timerText}>{timerValue || '00:00'}</Text>
      </TouchableOpacity>
      {/* Coins display */}
      <View style={styles.coinsContainer}>
        <Image source={require('../assets/coin.png')} style={styles.coinImage} />
        <Text style={styles.coinsText}>{coinsLeft || '1000'} </Text>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#f0f0f0',
    padding: 10,
    zIndex: 1 // Light background color
  },
  timerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  coinsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  coinImage: {
    width: 50,
    height: 50,
    marginRight: 5, // Adjust as needed
  },
  coinsText: {
    fontSize: 16,
  },
});

export default TopTabBar;
