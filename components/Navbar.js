import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
"use client";

const Navbar = ({ activePage, setActivePage }) => {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity
        style={[styles.navItem, activePage === 'FirstPage' && styles.activeNavItem]}
        onPress={() => setActivePage('FirstPage')}
      >
        <Text style={styles.navText}>
            <AntDesign name="home" size={24} color="black" />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.navItem, activePage === 'Profile' && styles.activeNavItem]}
        onPress={() => setActivePage('Profile')}
      >
        <Text style={styles.navText}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.navItem, activePage === 'Contact' && styles.activeNavItem]}
        onPress={() => setActivePage('Contact')}
      >
        <Text style={styles.navText}>Contact</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#333',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    paddingHorizontal: 15,
  },
  navText: {
    color: '#fff',
    fontSize: 16,
  },
  activeNavItem: {
    borderBottomWidth: 2,
    borderColor: '#fff',
  },
});

export default Navbar;
