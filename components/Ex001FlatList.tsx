import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

const frameworks = ["React", "Next.js", "SvelteKit", "Nuxt", "Angular"];

export const Ex001FlatList = () => {
	return (
		<NavigationContainer>
			<View style={styles.container}>
				<Text style={styles.title}>Ex001FlatList: </Text>
				<FlatList
					data={frameworks}
					keyExtractor={(item) => item}
					renderItem={(data) => <Text>{data.item}</Text>}
				></FlatList>
			</View>
		</NavigationContainer>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 20,
	},
	title: {
		fontWeight: "bold",
	},
});
