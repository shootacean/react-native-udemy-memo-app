import { Link, router } from "expo-router";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { useEffect } from "react";
import Button from "../components/Button";
import { auth } from "../config";
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
					<Link href="/auth/password-reset" asChild={true}>
						<TouchableOpacity>
							<Text style={styles.footerLink}>退会したい方はこちら</Text>
						</TouchableOpacity>
					</Link>
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
