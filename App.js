import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

/*
Equivalente:
import ReactNative from 'react-native';
const StyleSheet = ReactNative.StyleSheet;
*/

export default class App extends React.Component {
  render() {
    return (
      <View /* style={styles.container} */>
        <Text>Testando...</Text>
        <Text>Testando...</Text>
        <Text>Testando...</Text>
        <Text>Testando...</Text>
        <Text>Testando...</Text>
        <Text>Funcionou!</Text>
      </View>
    );
  }
}

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/