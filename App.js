import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from 'src/components/Header'

/*
Equivalente:
import ReactNative from 'react-native';
const StyleSheet = ReactNative.StyleSheet;
*/

export default class App extends React.Component {
  render() {
    return (
      <View /* style={styles.container} */>
        <Header/>
        <Header/>
        <Header/>
        <Header/>
        <Header/>
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