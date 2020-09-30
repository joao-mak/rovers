import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import calcRoverStatus from '../utils/calcRoverStatus';

const ScreenWidth = Dimensions.get('window').width;

const RoverField = (props) => {
  const [plateau, setPlateau] = useState('');
  const [status, setStatus] = useState('');
  const [moves, setMoves] = useState('');
  const [output, setOutput] = useState(null);
  const [rovers, setRovers] = useState([]);
  const [ready, setReady] = useState(false);

  const printOutput = () => {
    const finalStr = rovers.join(', ');
    setOutput(finalStr);
    setReady(true);
  };

  return (
    <View style={styles.fields}>
      {!plateau || plateau.length < 3 ? (
        <View>
          <Text style={styles.description}>Plateau dimensions</Text>
          <TextInput
            style={styles.text_input}
            onChangeText={(plateau) => setPlateau(plateau)}
            autoCapitalize="none"
            placeholder={'e.g. 6 6'}
          />
        </View>
      ) : (
        <View>
          <Text style={styles.description}>Rover's initial status</Text>
          <TextInput
            style={styles.text_input}
            onChangeText={(status) => setStatus(status)}
            autoCapitalize="none"
            placeholder={'e.g. 1 2 W'}
            value={status}
          />
          <Text style={styles.description}>Rover movement orders</Text>
          <TextInput
            style={styles.text_input}
            onChangeText={(moves) => setMoves(moves)}
            autoCapitalize="none"
            placeholder={'e.g. RMMRLMLM'}
            value={moves}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setRovers([...rovers, calcRoverStatus(plateau, status, moves)]);
              setStatus('');
              setMoves('');
            }}
          >
            <Text style={styles.button_text}>Add rover</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              printOutput();
              setStatus('');
              setMoves('');
            }}
          >
            <Text style={styles.button_text}>Get rovers' final status</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setStatus('');
              setMoves('');
              setPlateau(null);
              setReady(false);
            }}
          >
            <Text style={styles.button_text}>Reset plateau</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setStatus('');
              setMoves('');
              setRovers([]);
              setReady(false);
            }}
          >
            <Text style={styles.button_text}>Reset rovers</Text>
          </TouchableOpacity>
        </View>
      )}

      {ready && (
        <Text style={styles.output}>{`Rovers' final status: ${output}`}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  fields: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    fontSize: 20,
    marginBottom: 2,
    color: 'wheat',
  },
  text_input: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderRadius: 5,
    marginBottom: 15,
    padding: 2,
    width: ScreenWidth * 0.5,
  },
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
  output: {
    marginTop: 15,
    color: 'wheat',
    fontSize: 15,
  },
});

export default RoverField;
