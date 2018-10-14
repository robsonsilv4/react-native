import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = (props) => (
    <View style={style.container}>
		<Text style={style.title}>{ props.title }</Text>
	</View>
);

const style = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: '#00bcd4',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: '#fff',
        fontSize: 50
    }
});

export default Header;