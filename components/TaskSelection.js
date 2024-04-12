import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { firestore } from '../config/firebase'; // Import the initialized Firestore instance


const tasks = ['Task 1', 'Task 2', 'Task 3']; 






const Dropdown = ({navigation}) => {
  const [groupsCollectionRef, setGroupsCollectionRef] = useState(null);
  const [groups, setGroups] = useState([]);
  const handleContinuePress=()=>{
    navigation.navigate('Chat');
  }

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

  const [isLoading, setIsLoading] = useState(true); // Initial loading state
  const [selectedTask, setSelectedTask] = useState('');
  const [dropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false); // After 3 seconds, set loading to false
    }, 5000);

    return () => clearTimeout(timeoutId); // Cleanup function to clear timeout
  }, []);

  const handleTaskPress = (task) => {
    setSelectedTask(task);
    setDropdownVisible(false);
  };
 
  const content = ( // Separate component for content
    
      <View style={styles.contentContainer}> {/* Wrap content in styled View */}
       <View style={styles.partnerInfo}> {/* Container for partner info */}
       {groups.map((group) => (
        <>
            <Text style={styles.found} key={group.id}z>PARTNER FOUND:</Text>
            <Text style={styles.wiz}>{group.Username} </Text>
            <Text style={styles.found}>Task:</Text>
            <Text style={styles.wiz}>{group.Task} </Text>
        </>
        ))}
           </View>
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
      <TouchableOpacity style={styles.continueButton} onPress={handleContinuePress}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );

  return (
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
      {isLoading ? ( // Conditionally render loading message
        <Text style={styles.loadingText}>FINDING OPPONENT...</Text>
      ) : (
        <View style={styles.content}> {/* Wrap content in styled View */}
        {content}
      </View> // Render actual content after loading
      )}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center entire container vertically
    alignItems: 'center', // Center entire container horizontally
  },
  loadingText: {
    fontSize: 20,
    color: '#0B1D39',
    fontWeight:"800"
  },
  contentContainer: {
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  partnerInfo: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Set background color to red
    borderRadius: 10, // Add border radius
    padding: 35,
    marginBottom:20 // Add padding for better spacing
  },
  content: {
    flex: 1, // Make content take up full height (optional)
    justifyContent: 'center', // Center content vertically
    alignItems: 'center',
  },
  dropdown: {
    height: 40,
    width: '100%',
   
    borderColor: '#0B1D39',
    borderWidth: 3,
    borderRadius: 40,
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor:"#0B1D39"
  },
  dropdownText: {
    color: 'white',
    fontSize: 16,
  },
  dropdownItemsContainer: {
    borderColor: '#0B1D39',
    borderWidth: 2,
    borderRadius: 10,
    maxHeight: 200,
    overflow: 'hidden', 
    backgroundColor:"#0B1D39"

  },
  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#0B1D39',
    backgroundColor:"#0B1D39"
  },
  dropdownItemText: {
    color: 'white',
    fontSize: 16,
    fontWeight: "bold"
  },
  continueButton: {
    paddingVertical: 15,
    paddingHorizontal: 30,
   
    borderColor: '#0B1D39',
    borderWidth: 2,
    borderRadius: 40,
    marginTop: 20,
    backgroundColor:'#0B1D39'
  },
  continueButtonText: {
    color:'white',
    textAlign: 'center',
    fontSize: 16,
  },
  found:{
    color:"#0B1D39",
    textAlign: 'center',
    fontSize: 16,
    marginBottom:10,
    marginRight:10,marginLeft:10,
    fontWeight:"700"
  },
  wiz:{
    fontSize:20,
    fontWeight:"bold",
    textAlign:"center",
    color:"#2356A4",
    marginLeft:10
  }
});

export default Dropdown;
