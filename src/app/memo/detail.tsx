import { router, useLocalSearchParams } from "expo-router";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import type { Memo } from "../../../types/memo";
import { auth, db } from "../../config";

import CircleButton from "../../components/CircleButton";
import Icon from "../../components/Icon";

const Detail = () => {
	const [memo, setMemo] = useState<Memo | null>(null);
	const { id } = useLocalSearchParams();

	useEffect(() => {
		if (auth.currentUser === null) {
			router.replace("/auth/login");
			return;
		}
		const ref = doc(db, `users/${auth.currentUser.uid}/memos`, String(id));
		const unsubscribe = onSnapshot(ref, (memoDoc) => {
			console.debug(memoDoc.data());
			const { bodyText, updatedAt } = memoDoc.data() as Memo;
			setMemo({
				id: memoDoc.id,
				bodyText,
				updatedAt,
			});
		});
		return unsubscribe;
	}, [id]);

	return (
		<View style={styles.container}>
			<View style={styles.memoHeader}>
				<Text style={styles.memoTitle} numberOfLines={1}>
					{memo?.bodyText}
				</Text>
				<Text style={styles.memoDate}>
					{memo?.updatedAt.toDate().toLocaleString("ja-JP")}
				</Text>
			</View>
			<ScrollView>
				<Text style={styles.memoBodyText}>{memo?.bodyText}</Text>
			</ScrollView>
			<CircleButton
				onPress={() => router.push("/memo/edit")}
				style={{ top: 60, right: 40, bottom: "auto" }}
			>
				<Icon name="pencil" size={40} color="#FFFFFF" />
			</CircleButton>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	memoHeader: {
		backgroundColor: "#467FD3",
		height: 96,
		justifyContent: "center",
		paddingVertical: 24,
		paddingHorizontal: 19,
	},
	memoTitle: {
		color: "#FFFFFF",
		fontSize: 20,
		lineHeight: 32,
		fontWeight: "bold",
	},
	memoDate: {
		color: "#FFFFFF",
		fontSize: 12,
		lineHeight: 16,
	},
	memoBodyText: {
		paddingVertical: 32,
		paddingHorizontal: 27,
		fontSize: 16,
		lineHeight: 24,
	},
});

export default Detail;
