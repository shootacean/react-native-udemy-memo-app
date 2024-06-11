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
				<View style={styles.memoListItem}>
					<View>
						<Text style={styles.memoListItemTitle}>買い物リスト</Text>
						<Text style={styles.memoListItemDate}>2020年12月24日 10:00</Text>
					</View>
					<View>
						<Text>X</Text>
					</View>
				</View>

				<View style={styles.memoListItem}>
					<View>
						<Text style={styles.memoListItemTitle}>買い物リスト</Text>
						<Text style={styles.memoListItemDate}>2020年12月24日 10:00</Text>
					</View>
					<View>
						<Text>X</Text>
					</View>
				</View>

				<View style={styles.memoListItem}>
					<View>
						<Text style={styles.memoListItemTitle}>買い物リスト</Text>
						<Text style={styles.memoListItemDate}>2020年12月24日 10:00</Text>
					</View>
					<View>
						<Text>X</Text>
					</View>
				</View>
			</View>

			<View style={styles.circleButton}>
				<Text style={styles.circleButtonLabel}>+</Text>
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
	memoListItem: {
		backgroundColor: "#FFFFFF",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingVertical: 16,
		paddingHorizontal: 19,
		borderBottomWidth: 1,
		borderBottomColor: "rgba(0, 0, 0, 0.15)",
	},
	memoListItemTitle: {
		fontSize: 16,
		lineHeight: 32,
	},
	memoListItemDate: {
		fontSize: 12,
		lineHeight: 16,
		color: "#848484",
	},
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

export default Index;
