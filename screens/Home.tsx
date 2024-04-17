import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface IProps {
	navigation: any;
}

const blueColors = [
	"lightblue",
	"skyblue",
	"cornflowerblue",
	"dodgerblue",
	"steelblue",
];

const orangeColors = [
	"orange",
	"darkorange",
	"coral",
	"tomato",
	"orangered",
];

export const Home = ({ navigation }: IProps) => {
	return (
		<View>
			<TouchableOpacity
				onPress={() => {
					navigation.navigate("Styles and Flat List", {
						idCode: "blue",
						colors: blueColors,
					});
				}}
			>
				<Text style={styles.link}>Example page 001 with blue</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => {
					navigation.navigate("Styles and Flat List", {
						idCode: "orange",
						colors: orangeColors,
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
