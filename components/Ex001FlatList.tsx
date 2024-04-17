import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const frameworks = ["React", "Next.js", "SvelteKit", "Nuxt", "Angular"];

export const Ex001FlatList = () => {
	return (
			<View style={styles.container}>
				<FlatList
					data={frameworks}
					keyExtractor={(item) => item}
					renderItem={(data) => <Text style={styles.item}>{data.item}</Text>}
				></FlatList>
			</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 20,
	},
	item: {
		fontSize: 22
	},
});
