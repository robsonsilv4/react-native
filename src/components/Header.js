import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

/*
Statefull:
class Component exteds React.Component {
	render() {
		return (
			<Div></Div>
			<View></View>
		);
	}
}
*/

/*
const containerStyle = {
	marginTop: 15,
	backgroundColor: '#fff',
	alignItens: 'center',
	justifyContent: 'center'
}

const titleStyle = {
	color: '#fff',
	fontSize: 50
}
*/

// Stateless:
const Header = (props) => (
	<View style={style.container}>
		<Text style={style.title}>Esse é o nosso Header</Text>
	</View>
);

const style = StyleSheet.create({
	container: {
		marginTop: 15,
		backgroundColor: '#fff',
		/*Flex Box*/
		alignItens: 'center',
		justifyContent: 'center'
	},
	title: {
		color: '#fff',
		fontSize: 50
	}
});

export default Header;