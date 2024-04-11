import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

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
      <Text style={styles.coinsText}>{coinsLeft || '100'} Coins</Text>
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
    padding:20,
    zIndex:1 // Light background color
  },
  timerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  coinsText: {
    fontSize: 16,
  },
});

export default TopTabBar;
