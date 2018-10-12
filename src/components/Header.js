import React from 'react';
import {View, Text} from 'react-native';

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

// Stateless:
const Header = (props) => (
	<View>
		<Text>Esse é o nosso Header</Text>
	</View>
);

export default Header;