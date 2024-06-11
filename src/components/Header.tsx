import "expo-router/entry";
import { StyleSheet, Text, View } from "react-native";

export const Header = () => {
	return (
        <View style={styles.header}>
            <View style={styles.headerInner}>
                <Text style={styles.headerTitle}>Memo App</Text>
                <Text style={styles.headerRight}>ログアウト</Text>
            </View>
        </View>
	);
};

const styles = StyleSheet.create({
	header: {
		height: 104,
		backgroundColor: "#467FD3",
		justifyContent: "flex-end",
	},
	headerInner: {
		alignItems: "center",
	},
	headerTitle: {
		marginBottom: 8,
		fontSize: 24,
		lineHeight: 32,
		color: "#FFFFFF",
		fontWeight: "bold",
	},
	headerRight: {
		position: "absolute",
		right: 19,
		bottom: 16,
		color: "rgba(255, 255, 255, 0.8)",
	},
});

export default Header;
