import { router } from "expo-router";
import { signOut } from "firebase/auth";
import { Alert, StyleSheet, Text, TouchableOpacity } from "react-native";
import { auth } from "../config";
import { theme } from "../theme";

function handleLogout() {
	signOut(auth)
		.then(() => {
			router.replace("/auth/login");
		})
		.catch((error) => {
			Alert.alert("ログアウトに失敗しました");
			console.error(error);
		});
}

const LogoutButton = () => {
	return (
		<TouchableOpacity onPress={handleLogout}>
			<Text style={styles.text}>ログアウト</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 12,
		lineHeight: 24,
		color: theme.colors.secondary,
	},
});

export default LogoutButton;
