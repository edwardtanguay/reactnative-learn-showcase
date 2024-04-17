import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { ColorBox } from "../components/ColorBox";
import { Ex001FlatList } from "../components/Ex001FlatList";
import { useRoute } from "@react-navigation/native";

export const StylesAndFlatList = () => {
	const route: any = useRoute();
	const idCode:string = route.params ? route.params.idCode : "UNKNOWN";
	const colors: string[] = route.params ? route.params.colors : [];

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={styles.container}>
				<Text style={styles.text}>Here are some {idCode} styles:</Text>
				<Text>There are {route.params?.colors.length} colors.</Text>
				<ColorBox text="Box 4" backgroundColor={colors[0]} />
				<ColorBox text="Box 4" backgroundColor={colors[1]} />
				<ColorBox text="Box 4" backgroundColor={colors[2]} />
				<ColorBox text="Box 4" backgroundColor={colors[3]} />
				<ColorBox text="Box 5" backgroundColor={colors[4]} />
				<Ex001FlatList />
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		marginLeft: 30,
		marginVertical: 40,
		marginRight: 30,
		backgroundColor: "#ccc",
		padding: 10,
		borderRadius: 5,
		borderColor: "navy",
		borderWidth: 2,
		alignItems: "center",
		justifyContent: "flex-start",
		flex: 1,
	},
	text: {
		fontSize: 25,
		fontWeight: "bold",
	},
	box: {
		marginTop: 10,
		width: "90%",
		padding: 10,
		borderRadius: 5,
		borderWidth: 2,
		borderColor: "#555",
	},
	box1: {
		backgroundColor: "teal",
	},
	box2: {
		backgroundColor: "darkorange",
	},
	box3: {
		backgroundColor: "navy",
	},
	box3text: {
		color: "#ddd",
	},
});
