import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface IProps {
	navigation: any;
}

const blueColors = [
	"lightblue",
	"skyblue",
	"#7fa5e3",
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
					navigation.navigate("Ex001Colors", {
						idCode: "blue",
						colors: blueColors,
					});
				}}
			>
				<Text style={styles.link}>Example 001 with blue</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => {
					navigation.navigate("Ex001Colors", {
						idCode: "orange",
						colors: orangeColors,
					});
				}}
			>
				<Text style={styles.link}>Example 001 with orange</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => {
					navigation.navigate("Ex002FlatList");
				}}
			>
				<Text style={styles.link}>Example 002 with Flat List</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	link: {
		marginTop: 15,
		marginLeft: 15,
		fontSize: 18
	},
});
