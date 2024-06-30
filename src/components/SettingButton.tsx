import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { theme } from "../theme";

const SettingButton = () => {
	return (
		<Link href="/setting" asChild={true}>
			<TouchableOpacity>
				<Text style={styles.text}>設定</Text>
			</TouchableOpacity>
		</Link>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 12,
		lineHeight: 24,
		color: theme.colors.secondary,
	},
});

export default SettingButton;
