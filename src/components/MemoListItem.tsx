import "expo-router/entry";
import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Icon from "./Icon";

export const MemoListItem = () => {
	return (
		<Link href="/memo/detail" asChild={true}>
			<TouchableOpacity style={styles.memoListItem}>
				<View>
					<Text style={styles.memoListItemTitle}>買い物リスト</Text>
					<Text style={styles.memoListItemDate}>2020年12月24日 10:00</Text>
				</View>
				<TouchableOpacity>
					<Text>
						<Icon name="delete" size={32} color="#B0B0B0" />
					</Text>
				</TouchableOpacity>
			</TouchableOpacity>
		</Link>
	);
};

const styles = StyleSheet.create({
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
});

export default MemoListItem;
