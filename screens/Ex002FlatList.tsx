import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { Ex001FlatList } from "../components/Ex001FlatList";

export const Ex002FlatList = () => {
	return (
		<View style={styles.container}>
			<Ex001FlatList />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginLeft: 30,
		marginVertical: 15,
	},
});
