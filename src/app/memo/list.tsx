import { router, useNavigation } from "expo-router";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import type { Memo } from "../../../types/memo";
import CircleButton from "../../components/CircleButton";
import Icon from "../../components/Icon";
import LogoutButton from "../../components/LogoutButton";
import MemoListItem from "../../components/MemoListItem";
import { auth, db } from "../../config";

const List = () => {
	const navigation = useNavigation();
	const [memos, setMemos] = useState<Memo[]>([]);

	useEffect(() => {
		navigation.setOptions({
			headerRight: () => <LogoutButton />,
		});
	}, [navigation]);

	useEffect(() => {
		if (!auth.currentUser) {
			router.replace("/auth/login");
			return;
		}
		const ref = collection(db, `users/${auth.currentUser.uid}/memos`);
		const q = query(ref, orderBy("updatedAt", "desc"));
		const unsubscribe = onSnapshot(q, (snapshot) => {
			const remoteMemos: Memo[] = [];
			for (const doc of snapshot.docs) {
				const { bodyText, updatedAt } = doc.data();
				remoteMemos.push({
					id: doc.id,
					bodyText,
					updatedAt,
				});
			}
			setMemos(remoteMemos);
		});
		return unsubscribe;
	}, []);

	return (
		<View style={styles.container}>
			<FlatList
				data={memos}
				renderItem={({ item }) => <MemoListItem memo={item} />}
				// keyExtractor={(item) => item.id}
			/>
			<CircleButton onPress={() => router.push("/memo/create")}>
				<Icon name="plus" size={40} color="#FFFFFF" />
			</CircleButton>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
});

export default List;
