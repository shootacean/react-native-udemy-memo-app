import "expo-router/entry";
import type { ReactNode } from "react";
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	type ViewStyle,
} from "react-native";
import { theme } from "../theme";

interface CircleButtonProps {
	children: ReactNode;
	style?: ViewStyle;
	onPress?: () => void;
}

const CircleButton = ({ children, style, onPress }: CircleButtonProps) => {
	return (
		<TouchableOpacity style={[styles.circleButton, style]} onPress={onPress}>
			<Text style={styles.circleButtonLabel}>{children}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	circleButton: {
		width: 64,
		height: 64,
		borderRadius: 64 / 2,
		backgroundColor: theme.colors.primary,
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
		color: theme.colors.secondary,
		fontSize: 40,
		lineHeight: 40,
	},
});

export default CircleButton;
