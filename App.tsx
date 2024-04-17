import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./screens/Home";
import { Ex001Colors } from "./screens/Ex001Colors";
import { Ex002FlatList } from "./screens/Ex002FlatList";

const Stack = createStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Ex001Colors" component={Ex001Colors} />
				<Stack.Screen name="Ex002FlatList" component={Ex002FlatList} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};


export default App;
