import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const tasks = ['Task 1', 'Task 2', 'Task 3'];

const Dropdown = () => {
  const [selectedTask, setSelectedTask] = useState('');
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleTaskPress = (task) => {
    setSelectedTask(task);
    setDropdownVisible(false);
  };

  return (
    <LinearGradient
      colors={[
        '#380b42', '#391746', '#3a204a', '#3c284d', '#3e3050',
        '#403152', '#413154', '#433256', '#452c57', '#492458',
        '#4d1a57', '#520b55'
      ]}
      style={styles.container}
    >
      <View style={styles.content}>
        <TouchableOpacity style={styles.dropdown} onPress={() => setDropdownVisible(!dropdownVisible)}>
          <Text style={styles.dropdownText}>{selectedTask || 'Select a task'}</Text>
        </TouchableOpacity>
        {dropdownVisible && (
          <View style={styles.dropdownItemsContainer}>
            {tasks.map((task) => (
              <TouchableOpacity key={task} style={styles.dropdownItem} onPress={() => handleTaskPress(task)}>
                <Text style={styles.dropdownItemText}>{task}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
        <TouchableOpacity style={styles.continueButton} onPress={() => console.log('Continue button pressed')}>
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdown: {
    height: 40,
    width: '80%',
   
    borderColor: '#0BF6E7',
    borderWidth: 3,
    borderRadius: 40,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30
  },
  dropdownText: {
    color: '#0BF6E7',
    fontSize: 16,
  },
  dropdownItemsContainer: {
    borderColor: '#0BF6E7',
    borderWidth: 2,
    borderRadius: 10,
    maxHeight: 200,
    overflow: 'hidden', 
  },
  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#0BF6E7',
  },
  dropdownItemText: {
    color: '#0BF6E7',
    fontSize: 16,
    fontWeight: "bold"
  },
  continueButton: {
    paddingVertical: 15,
    paddingHorizontal: 30,
   
    borderColor: '#0BF6E7',
    borderWidth: 2,
    borderRadius: 40,
    marginTop: 20,
  },
  continueButtonText: {
    color:'#0BF6E7',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default Dropdown;
