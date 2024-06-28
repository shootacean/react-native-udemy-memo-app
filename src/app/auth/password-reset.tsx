import { sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import Button from "../../components/Button";
import { auth } from "../../config";
import { theme } from "../../theme";

export const PasswordReset = () => {
	const [email, setEmail] = useState("");

	const handlePasswordReset = async (email: string) => {
		try {
			// MEMO: Firebaseの「メールの列挙保護」を有効にしているため、メールアドレスが存在しない場合も「パスワードリセットメールを送信しました」と表示される
			// https://github.com/firebase/firebase-js-sdk/issues/7651
			await sendPasswordResetEmail(auth, email);
			Alert.alert(
				"パスワードリセットメールを送信しました。\nメールをご確認ください。\n（メールが届かない場合は、入力したメールアドレスを見直す、または迷惑メールフォルダをご確認ください）",
			);
		} catch {
			Alert.alert("パスワードリセットメールの送信に失敗しました。");
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.inner}>
				<View>
					<Text style={styles.title}>パスワードリセット</Text>
					<TextInput
						style={styles.input}
						value={email}
						onChangeText={(text) => setEmail(text)}
						autoCapitalize="none"
						keyboardType="email-address"
						placeholder="メールアドレス"
						textContentType="emailAddress"
					/>
				</View>
				<Button onPress={() => handlePasswordReset(email)}>リセット</Button>
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
});

export default PasswordReset;
