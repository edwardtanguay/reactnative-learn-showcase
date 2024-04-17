import React from "react";
import {
	View,
	Text,
	SafeAreaView,
	StyleSheet,
	KeyboardAvoidingView,
} from "react-native";

const App = () => {
	return (
		<SafeAreaView>
			<View style={styles.container}>
				<Text>Hello World.</Text>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		marginLeft: 30,
		marginTop: 40,
		marginRight: 30,
		backgroundColor: "#ccc",
		padding: 10,
		borderRadius: 5
	},
});

export default App;
