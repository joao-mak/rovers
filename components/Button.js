import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
  const { handlePress, title } = props;

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.button_text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 15,
    backgroundColor: '#8f4549',
    padding: 10,
    marginVertical: 5,
    textAlign: 'center',
  },
  button_text: {
    fontSize: 15,
    padding: 5,
    color: 'wheat',
    textAlign: 'center',
  },
});

export default Button;
