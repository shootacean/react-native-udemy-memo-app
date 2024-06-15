import { router } from "expo-router";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import {
	KeyboardAvoidingView,
	StyleSheet,
	TextInput,
	View,
} from "react-native";
import { auth, db } from "../../config";

import CircleButton from "../../components/CircleButton";
import Icon from "../../components/Icon";

async function handleCreate(bodyText: string) {
	if (!auth.currentUser) {
		// ログインしていない場合は何もせずログイン画面へ遷移する
		router.replace("/auth/login");
		return;
	}
	const ref = collection(db, `users/${auth.currentUser?.uid}/memos`);
	try {
		await addDoc(ref, {
			bodyText,
			cretatedAt: Timestamp.fromDate(new Date()),
			updatedAt: Timestamp.fromDate(new Date()),
		});
		router.back();
	} catch (error) {
		console.error(error);
	}
}

const Create = () => {
	const [bodyText, setBodyText] = useState("");

	return (
		<KeyboardAvoidingView behavior="height" style={styles.container}>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					multiline={true}
					value={bodyText}
					onChangeText={(text) => setBodyText(text)}
				/>
			</View>
			<CircleButton onPress={() => handleCreate(bodyText)}>
				<Icon name="check" size={40} color="#ffffff" />
			</CircleButton>
		</KeyboardAvoidingView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	inputContainer: {
		paddingHorizontal: 27,
		paddingVertical: 32,
		flex: 1,
	},
	input: {
		flex: 1,
		textAlignVertical: "top",
		fontSize: 16,
		lineHeight: 24,
	},
});

export default Create;
