import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface IProps {
	navigation: any;
}

const colors = [
	"lightblue",
	"skyblue",
	"cornflowerblue",
	"dodgerblue",
	"steelblue",
];

export const Home = ({ navigation }: IProps) => {
	return (
		<View>
			<TouchableOpacity
				onPress={() => {
					navigation.navigate("Styles and Flat List", {
						idCode: "blue",
						colors,
					});
				}}
			>
				<Text style={styles.link}>Example page 001 with blue</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => {
					navigation.navigate("Styles and Flat List", {
						idCode: "orange",
						colors,
					});
				}}
			>
				<Text style={styles.link}>Example page 001 with orange</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	link: {
		marginTop: 10,
		marginLeft: 10,
	},
});
