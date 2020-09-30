import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const ScreenWidth = Dimensions.get('window').width;

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Rover Status</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    width: ScreenWidth,
    backgroundColor: '#8f4549',
  },
  title: {
    fontSize: 50,
    color: 'wheat',
  },
});

export default Header;
