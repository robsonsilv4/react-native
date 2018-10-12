import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from 'src/components/Header'

/*
Equivalente:
import ReactNative from 'react-native';
const StyleSheet = ReactNative.StyleSheet;
*/

export default class App extends React.Component {
  renderList() {
    const names = [
      'Robson Silva',
      'Gildard Mhn',
      'Gabriel Lins',
      'Max Wendel',
      'Emerson Vieira'
    ];

    const textElements = names.map(name => {
      return <Text key={ name }>{ name }</Text>
    });

    return textElements;
  }

  render() {
    return (
      <View /* style={styles.container} */>
        <Header title="Pessoas!" />
        { this.renderList() }
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