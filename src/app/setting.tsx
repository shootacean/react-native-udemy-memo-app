import { Link, router } from "expo-router";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import {
	type CollectionReference,
	collection,
	deleteDoc,
	doc,
	getDocs,
} from "firebase/firestore";
import { useEffect } from "react";
import Button from "../components/Button";
import { auth, db } from "../config";
import { theme } from "../theme";

async function handleLogout() {
	try {
		await signOut(auth);
		router.replace("/auth/login");
	} catch (e) {
		const error = e as Error;
		Alert.alert("ログアウトに失敗しました");
		console.error(error);
	}
}

const _deleteCollection = async (collectionRef: CollectionReference) => {
	const snapshot = await getDocs(collectionRef);
	const promises = snapshot.docs.map((doc) => deleteDoc(doc.ref));
	await Promise.all(promises);
};

const deleteUserData = async (userId: string): Promise<void> => {
	const userDocRef = doc(db, "users", userId);
	const userSubCollections = await getDocs(collection(userDocRef, "memos"));

	const promises = userSubCollections.docs.map((doc) => deleteDoc(doc.ref));
	await Promise.all(promises);

	// サブコレクションのドキュメントを削除
	// for (const subCollection of userSubCollections.docs) {
	// 	console.debug("subCollection", subCollection.id);
	// 	await deleteCollection(collection(userDocRef, subCollection.id));
	// }

	// ユーザードキュメントを削除
	await deleteDoc(userDocRef);
};

async function deleteAccount() {
	const user = auth.currentUser;
	console.debug("user", user);
	if (!user) {
		return false;
	}

	try {
		await deleteUserData(user.uid);

		// Firebase Authenticationからユーザーを削除
		await user.delete();

		Alert.alert("アカウントを削除しました");
		router.replace("/auth/signup");
	} catch (e) {
		const error = e as Error;
		Alert.alert("アカウントの削除に失敗しました");
		console.error(error);
	}
}

async function handleDeleteAccount() {
	const user = auth.currentUser;
	if (!user) {
		return;
	}
	Alert.alert("退会します", "よろしいですか？", [
		{
			text: "キャンセル",
			style: "cancel",
		},
		{
			text: "退会する",
			style: "destructive",
			onPress: async () => deleteAccount(),
		},
	]);
}

const Setting = () => {
	const [isAnonymous, setIsAnonymous] = useState<boolean>();

	// ログイン種類
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setIsAnonymous(user.isAnonymous);
			}
		});
		return () => unsubscribe();
	}, []);

	return (
		<View style={styles.container}>
			<View style={styles.inner}>
				{isAnonymous === true && (
					<View style={styles.buttonArea}>
						<Link href="/auth/signup" asChild={true}>
							<Button>会員登録</Button>
						</Link>
					</View>
				)}
				<View style={styles.buttonArea}>
					<Button onPress={handleLogout}>ログアウト</Button>
				</View>
				<View style={styles.footer}>
					<TouchableOpacity onPress={handleDeleteAccount}>
						<Text style={styles.footerLink}>退会したい方はこちら</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	inner: {
		paddingVertical: 24,
		paddingHorizontal: 27,
	},
	title: {
		fontSize: 24,
		lineHeight: 32,
		fontWeight: "bold",
		marginBottom: 24,
	},
	input: {
		borderWidth: 1,
		borderColor: theme.colors.borderColor,
		backgroundColor: theme.colors.background,
		height: 48,
		padding: 8,
		fontSize: 16,
		marginBottom: 16,
	},
	buttonArea: {
		alignItems: "flex-end",
	},
	footer: {
		flexDirection: "row",
		justifyContent: "flex-end",
	},
	footerLink: {
		fontSize: 14,
		lineHeight: 24,
		color: theme.colors.secondary,
		marginLeft: 8,
	},
});

export default Setting;
