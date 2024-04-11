import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Profile = () => {
  const defaultName = 'John Doe'; // Replace with your desired default name
  const defaultBio = 'This is a sample bio.'; // Replace with your desired default bio
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(defaultName); // State for name
  const [bio, setBio] = useState(defaultBio); // State for bio

  const handleEditPress = () => {
    setEditMode(!editMode);
  };

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleBioChange = (text) => {
    setBio(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileImageContainer}>
        <Image source={require('../assets/User_cicrle_light.png')} // Replace with your image path
               style={styles.profileImage} />
      </View>
      <View style={styles.profileInfoContainer}>
        <Text style={styles.nameText}>
          {editMode ? (
            <TextInput
              style={styles.nameInput}
              value={name} // Use state for name
              onChangeText={handleNameChange} // Handle name changes
            />
          ) : (
            name // Display name from state
          )}
        </Text>
        <Text style={styles.bioText}>
          {editMode ? (
            <TextInput
              style={styles.bioInput}
              value={bio} // Use state for bio
              onChangeText={handleBioChange} // Handle bio changes
            />
          ) : (
            bio // Display bio from state
          )}
        </Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Email:</Text>
          <Text style={styles.infoValue}>contact@example.com</Text>  {/* Replace with your desired email */}
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Phone Number:</Text>
          <Text style={styles.infoValue}>+1234567890</Text>  {/* Replace with your desired phone number */}
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Coins:</Text>
          <Text style={styles.infoValue}>100</Text>  {/* You can set a default value for coins */}
        </View>

        {/* Edit button */}
        <TouchableOpacity style={styles.editButton} onPress={handleEditPress}>
          <Text style={styles.editButtonText}>{editMode ? 'Save' : 'Edit Profile'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      paddingHorizontal: 20,
      backgroundColor: '#0B1D39', // Changed to '#0B1D39'
     
    },
    profileImageContainer: {
      marginBottom: 30,
      marginTop:50
    },
    profileImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
    },
    profileInfoContainer: {
      alignItems: 'center',
    },
    nameText: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 30,
      color: '#fff', // Changed to white for better contrast on dark background
    },
    bioText: {
      fontSize: 16,
      marginBottom: 30,
      color: '#fff', // Changed to white for better contrast on dark background
    },
    infoRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 25,
      color: '#fff', // Changed to white for better contrast on dark background
    },
    infoLabel: {
      fontSize: 16,
      color: '#fff', // Changed to white for better contrast on dark background
    },
    infoValue: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#fff', // Changed to white for better contrast on dark background
    },
    nameInput: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#000', // Set to black for better visibility in edit mode
    },
    bioInput: {
      fontSize: 16,
      marginBottom: 20,
      color: '#000', // Set to black for better visibility in edit mode
    },
    editButton: {
      marginTop: 20,
      padding: 10,
      backgroundColor: '#f0f0f0', // Maintains light background for the button
      borderRadius: 5,
    },
    editButtonText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#0B1D39'
    },
  });
  

export default Profile;
