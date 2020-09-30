import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Header from './components/Header';
import RoverField from './components/RoverField';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <RoverField />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#75282c',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
