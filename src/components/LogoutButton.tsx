import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const LogoutButton = () => {
	return (
		<TouchableOpacity onPress={() => router.replace("/auth/login")}>
			<Text style={styles.text}>ログアウト</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 12,
		lineHeight: 24,
		color: "rgba(255, 255, 255, 0.8)",
	},
});

export default LogoutButton;
