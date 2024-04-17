import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { ColorBox } from "./components/ColorBox";
import { Ex001FlatList } from "./components/Ex001FlatList";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ColorPalette } from "./screens/ColorPalette";
import { Home } from "./screens/Home";

const Stack = createStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="ColorPalette" component={ColorPalette} />
			</Stack.Navigator>
		</NavigationContainer>
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

export default App;
