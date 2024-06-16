import { router, useLocalSearchParams } from "expo-router";
import { Timestamp, doc, getDoc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import type { Memo } from "../../../types/memo";
import { auth, db } from "../../config";

import CircleButton from "../../components/CircleButton";
import Icon from "../../components/Icon";
import KeyboardSafeView from "../../components/KeyboardSafeView";

async function handleSave(id: string, bodyText: string): Promise<void> {
	try {
		const ref = doc(db, `users/${auth?.currentUser?.uid}/memos`, id);
		await setDoc(ref, {
			bodyText,
			updatedAt: Timestamp.fromDate(new Date()),
		});
		router.back();
	} catch (error) {
		console.error("Error updating document:", error);
		Alert.alert("Failed to save the memo.");
	}
}

const Edit = () => {
	const [bodyText, setBodyText] = useState<string>("");
	const id = String(useLocalSearchParams().id);

	useEffect(() => {
		(async () => {
			if (auth.currentUser === null) {
				router.replace("/auth/login");
				return;
			}
			try {
				const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id);
				const docRef = await getDoc(ref);
				const { bodyText } = docRef.data() as Memo;
				setBodyText(bodyText);
			} catch (error) {
				console.error("Error getting document:", error);
			}
		})();
	}, [id]);

	return (
		<KeyboardSafeView style={styles.container}>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					value={bodyText}
					multiline={true}
					onChangeText={(text) => setBodyText(text)}
					autoFocus={true}
				/>
			</View>
			<CircleButton onPress={() => handleSave(id, bodyText)}>
				<Icon name="check" size={40} color="#ffffff" />
			</CircleButton>
		</KeyboardSafeView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	inputContainer: {
		flex: 1,
	},
	input: {
		flex: 1,
		textAlignVertical: "top",
		paddingHorizontal: 27,
		paddingVertical: 32,
		fontSize: 16,
		lineHeight: 24,
	},
});

export default Edit;
