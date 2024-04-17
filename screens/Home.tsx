import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface IProps {
	navigation: any;
}

export const Home = ({ navigation }: IProps) => {
	return (
		<View>
			<TouchableOpacity onPress={() => {
				navigation.navigate('Styles and Flat List');
			}}>
				<Text style={styles.link}>View Styles and Flat List</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	link: {
		marginTop: 10,
		marginLeft: 10
	}
})
