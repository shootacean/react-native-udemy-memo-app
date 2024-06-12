import "expo-router/entry";
import type { ReactNode } from "react";
import { StyleSheet, Text, View, type ViewStyle } from "react-native";

interface CircleButtonProps {
	children: ReactNode;
	style?: ViewStyle;
}

const CircleButton = ({ children, style }: CircleButtonProps) => {
	return (
		<View style={[styles.circleButton, style]}>
			<Text style={styles.circleButtonLabel}>{children}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	circleButton: {
		width: 64,
		height: 64,
		borderRadius: 64 / 2,
		backgroundColor: "#467FD3",
		justifyContent: "center",
		alignItems: "center",
		position: "absolute",
		right: 40,
		bottom: 40,
		// iOS
		shadowColor: "#000",
		shadowOpacity: 0.25,
		shadowRadius: 8,
		shadowOffset: { width: 0, height: 8 },
		// Android ( https://m3.material.io/styles/elevation/overview )
		elevation: 8,
	},
	circleButtonLabel: {
		color: "#FFFFFF",
		fontSize: 40,
		lineHeight: 40,
	},
});

export default CircleButton;
