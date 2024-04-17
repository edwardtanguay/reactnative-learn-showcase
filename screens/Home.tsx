import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface IProps {
	navigation: any;
}

export const Home = ({ navigation }: IProps) => {
	return (
		<View>
			<TouchableOpacity onPress={() => {
				navigation.navigate('ColorPalette');
			}}>
				<Text style={styles.link}>View color areas</Text>
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
