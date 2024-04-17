import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface IProps {
	navigation: any;
}

export const Home = ({ navigation }: IProps) => {
	return (
		<View>
			<TouchableOpacity onPress={() => {
				navigation.navigate('ColorPalette');
			}}>
				<Text>home page</Text>
			</TouchableOpacity>
		</View>
	);
};
