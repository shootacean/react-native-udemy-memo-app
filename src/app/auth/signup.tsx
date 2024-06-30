import { Link, router } from "expo-router";
import { useEffect, useState } from "react";
import {
	Alert,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";

import {
	EmailAuthProvider,
	type UserCredential,
	createUserWithEmailAndPassword,
	linkWithCredential,
	onAuthStateChanged,
	signInAnonymously,
} from "firebase/auth";
import Button from "../../components/Button";
import { auth } from "../../config";
import { theme } from "../../theme";

async function handleSignUp(email: string, password: string): Promise<void> {
	try {
		const user = auth.currentUser;
		let userCredential: UserCredential;
		// 匿名ログインの場合はユーザーをリンクする
		if (user?.isAnonymous) {
			const emailCredential = EmailAuthProvider.credential(email, password);
			userCredential = await linkWithCredential(user, emailCredential);
		} else {
			// 未ログインの場合はユーザーを作成する
			userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password,
			);
		}
		console.info("Signed up", userCredential.user.uid);
		router.replace("/memo/list");
	} catch (e) {
		const error = e as Error;
		console.error("Failed to sign up", error);
		Alert.alert(error.message);
	}
}

async function handleGuestLogin(): Promise<void> {
	try {
		const userCredential = await signInAnonymously(auth);
		const user = userCredential.user;
		console.info("Guest Logged in", user.uid);
		router.replace("/memo/list");
	} catch (e) {
		const error = e as Error;
		console.error("Failed to log in", error);
		Alert.alert(error.message);
	}
}

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isAnonymous, setIsAnonymous] = useState<boolean | undefined>(
		undefined,
	);

	// ログイン種類
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				console.debug(user.isAnonymous);
				setIsAnonymous(user.isAnonymous);
			}
		});
		return () => unsubscribe();
	}, []);

	return (
		<View style={styles.container}>
			<View style={styles.inner}>
				<View>
					<Text style={styles.title}>会員登録</Text>
					<TextInput
						style={styles.input}
						value={email}
						onChangeText={(text) => setEmail(text)}
						autoCapitalize="none"
						keyboardType="email-address"
						placeholder="メールアドレス"
						textContentType="emailAddress"
					/>
					<TextInput
						style={styles.input}
						value={password}
						onChangeText={(text) => setPassword(text)}
						autoCapitalize="none"
						secureTextEntry={true}
						placeholder="パスワード"
						textContentType="password"
					/>
				</View>
				<View style={styles.buttonArea}>
					<Button onPress={() => handleSignUp(email, password)}>
						会員登録
					</Button>
				</View>
				{(isAnonymous === undefined || isAnonymous === false) && (
					<View style={styles.footer}>
						<Link href="/auth/login" asChild={true} replace={true}>
							<TouchableOpacity>
								<Text style={styles.footerLink}>会員登録済みの方はこちら</Text>
							</TouchableOpacity>
						</Link>
					</View>
				)}
				{(isAnonymous === undefined || isAnonymous === false) && (
					<View style={styles.footer}>
						<TouchableOpacity onPress={handleGuestLogin}>
							<Text style={styles.footerLink}>会員登録せずに利用する</Text>
						</TouchableOpacity>
					</View>
				)}
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
		color: theme.colors.secondary,
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

export default Login;
