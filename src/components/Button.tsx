import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { theme } from "../theme";

interface ButtonProps {
	children: string;
	onPress?: () => void;
}

const Button = ({ children, onPress }: ButtonProps) => {
	return (
		<TouchableOpacity style={styles.button} onPress={onPress}>
			<Text style={styles.buttonLabel}>{children}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		backgroundColor: theme.colors.primary,
		borderRadius: 4,
		width: 100,
		marginBottom: 24,
	},
	buttonLabel: {
		color: theme.colors.secondary,
		paddingVertical: 12,
		textAlign: "center",
	},
});

export default Button;
