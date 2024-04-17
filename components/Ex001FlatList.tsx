import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const frameworks = ["React", "Next.js", "SvelteKit", "Nuxt", "Angular"];

export const Ex001FlatList = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Frameworks: </Text>
			<FlatList
				data={frameworks}
				keyExtractor={item => item}
				renderItem={data => <Text>{data.item}</Text>}
			></FlatList>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 20,
	},
	title: {
		fontWeight: 'bold'
	}
});
