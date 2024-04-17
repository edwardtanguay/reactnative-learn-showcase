import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./screens/Home";
import { StylesAndFlatList } from "./screens/StylesAndFlatList";

const Stack = createStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Styles and Flat List" component={StylesAndFlatList} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};


export default App;
