import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header'

import axios from 'axios';

/*
Equivalente:
import ReactNative from 'react-native';
const StyleSheet = ReactNative.StyleSheet;
*/

export default class App extends React.Component {
    renderList() {
        axios
            .get("https://randomuser.me/api/?nat=br&results=5")
            .then(response => {
                const { results } = response.data;
                const names = results.map(people => people.name.first);
                console.log(names)
            })
    }

    render() {
        return (
            <View>
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