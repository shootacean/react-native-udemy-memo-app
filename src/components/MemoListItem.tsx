import "expo-router/entry";
import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import type { Memo } from "../../types/memo";
import Icon from "./Icon";

interface MemoListItemProps {
	memo: Memo;
}

export const MemoListItem = ({ memo }: MemoListItemProps) => {
	const { bodyText, updatedAt } = memo;
	if (bodyText === undefined || updatedAt === undefined) {
		console.error("Invalid memo", memo);
		return null;
	}
	const updatedAtString = memo.updatedAt.toDate().toLocaleString("ja-JP");
	return (
		<Link href="/memo/detail" asChild={true}>
			<TouchableOpacity style={styles.memoListItem}>
				<View>
					<Text style={styles.memoListItemTitle} numberOfLines={1}>
						{memo.bodyText}
					</Text>
					<Text style={styles.memoListItemDate}>{updatedAtString}</Text>
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
