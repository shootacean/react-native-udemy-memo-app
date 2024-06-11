import type { ReactNode } from "react";
import { StyleSheet, Text, type TextStyle, View } from "react-native";

interface HelloProps {
	children: ReactNode;
	bang?: boolean;
	style?: TextStyle;
}

export const Hello = ({ children, bang, style }: HelloProps) => {
	return (
		<View>
			<Text style={[styles.text, style]}>
				Hello {children} {bang ? "!" : ""}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		padding: 16,
		backgroundColor: "blue",
		fontSize: 40,
		fontWeight: "bold",
		color: "white",
	},
});
