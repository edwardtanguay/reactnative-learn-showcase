import React from "react";
import {
	View,
	Text,
	SafeAreaView,
	StyleSheet,
	KeyboardAvoidingView,
} from "react-native";
import { ColorBox } from "./components/ColorBox";

const App = () => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={styles.container}>
				<Text style={styles.text}>Here are some styles:</Text>
				<View style={[styles.box, styles.box1]}>
					<Text>Box 1</Text>
				</View>
				<View style={[styles.box, styles.box2]}>
					<Text>Box 2</Text>
				</View>
				<View style={[styles.box, styles.box3]}>
					<Text style={styles.box3text}>Box 3</Text>
				</View>
				<ColorBox/>
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
		justifyContent: "center",
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
		borderColor: '#555'
	},
	box1: {
		backgroundColor: "teal",
	},
	box2: {
		backgroundColor: "darkorange",
	},
	box3: {
		backgroundColor: "navy"
	},
	box3text: {
		color: '#ddd'
	}
});

export default App;
