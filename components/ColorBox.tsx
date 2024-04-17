import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface IProps {
	text: string;
	backgroundColor: string;
}

export const ColorBox = ({ text, backgroundColor } : IProps) => {
	return (
		<View style={[styles.box, {backgroundColor}]}>
			<Text>{text}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	box: {
		marginTop: 10,
		width: "90%",
		padding: 10,
		borderRadius: 5,
		borderWidth: 2,
		borderColor: "#555",
	}
});
