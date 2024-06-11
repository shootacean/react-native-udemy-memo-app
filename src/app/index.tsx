import "expo-router/entry";
import { StyleSheet, Text, View } from "react-native";

export const Index = () => {
	return (
		<View style={styles.container}>
			{/* Header */}
			<View style={styles.header}>
				<View style={styles.headerInner}>
					<Text style={styles.headerTitle}>Memo App</Text>
					<Text style={styles.headerRight}>ログアウト</Text>
				</View>
			</View>
			{/* List */}
			<View>
				{/* List Item */}
				<View>
					<Text>買い物リスト</Text>
					<Text>2020年12月24日 10:00</Text>
					<View>
						<Text>X</Text>
					</View>
				</View>
				<View>
					<Text>買い物リスト</Text>
					<Text>2020年12月24日 10:00</Text>
					<View>
						<Text>X</Text>
					</View>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
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

export default Index;
