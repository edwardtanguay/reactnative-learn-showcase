import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Ex001FlatList = () => {
	return (
		<View style={styles.container}>
			<Text>flat list</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 20,
	},
});
