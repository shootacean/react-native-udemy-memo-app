import { Link, router } from "expo-router";
import { deleteDoc, doc } from "firebase/firestore";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { auth, db } from "../config";

import type { Memo } from "../../types/memo";
import { theme } from "../theme";
import Icon from "./Icon";

interface MemoListItemProps {
	memo: Memo;
}

function handleDelete(id: string): void {
	if (auth.currentUser === null) {
		console.error("User is not signed in.");
		router.replace("/auth/login");
		return;
	}
	const ref = doc(db, `users/${auth.currentUser?.uid}/memos`, id);
	Alert.alert("メモを削除します", "よろしいですか？", [
		{
			text: "キャンセル",
			style: "cancel",
		},
		{
			text: "削除する",
			style: "destructive",
			onPress: async () => {
				try {
					await deleteDoc(ref);
				} catch (error) {
					console.error("Error deleting document:", error);
					Alert.alert("Failed to delete the memo.");
				}
			},
		},
	]);
}

export const MemoListItem = ({ memo }: MemoListItemProps) => {
	const { bodyText, updatedAt } = memo;
	if (bodyText === undefined || updatedAt === undefined) {
		console.error("Invalid memo", memo);
		return null;
	}
	const updatedAtString = memo.updatedAt.toDate().toLocaleString("ja-JP");
	return (
		<Link
			href={{ pathname: "/memo/detail", params: { id: memo.id } }}
			asChild={true}
		>
			<TouchableOpacity style={styles.memoListItem}>
				<View>
					<Text style={styles.memoListItemTitle} numberOfLines={1}>
						{memo.bodyText}
					</Text>
					<Text style={styles.memoListItemDate}>{updatedAtString}</Text>
				</View>
				<TouchableOpacity onPress={() => handleDelete(memo.id)}>
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
		backgroundColor: theme.colors.background,
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
