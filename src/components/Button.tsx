import { StyleSheet, Text, TouchableOpacity } from "react-native";

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
		backgroundColor: "#467FD3",
		borderRadius: 4,
		width: 100,
		marginBottom: 24,
	},
	buttonLabel: {
		color: "#FFFFFF",
		paddingVertical: 12,
		textAlign: "center",
	},
});

export default Button;
