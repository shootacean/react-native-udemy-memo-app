import { StyleSheet, Text, View } from "react-native";

interface ButtonProps {
	children: string;
}

const Button = ({ children }: ButtonProps) => {
	return (
		<View style={styles.button}>
			<Text style={styles.buttonLabel}>{children}</Text>
		</View>
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
