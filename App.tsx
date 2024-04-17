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
		<SafeAreaView style={{flex: 1}}>
			<View style={styles.container}>
				<Text style={styles.text}>Here are some styles:</Text>
				<View style={styles.box1}>
					<Text>Box 1</Text>
				</View>
				<View style={styles.box2}>
					<Text>Box 2</Text>
				</View>
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
		borderColor: 'navy',
		borderWidth: 2,
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1
	},
	text: {
		fontSize: 25,
		fontWeight: 'bold'
	},
	box1: {
		marginTop: 10,
		backgroundColor: 'teal',
		width: '90%',
		padding: 10,
		borderRadius: 5
	},
	box2: {
		marginTop: 10,
		backgroundColor: 'darkorange',
		width: '90%',
		padding: 10,
		borderRadius: 5
	}
});

export default App;
