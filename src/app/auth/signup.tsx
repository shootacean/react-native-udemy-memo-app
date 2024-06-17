import { Link, router } from "expo-router";
import { useState } from "react";
import {
	Alert,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";

import { createUserWithEmailAndPassword } from "firebase/auth";
import Button from "../../components/Button";
import { auth } from "../../config";

function handleSubmit(email: string, password: string): void {
	console.debug("Sign up", email, password);
	createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			const user = userCredential.user;
			console.debug("Signed up", user.uid);
			router.replace("/memo/list");
		})
		.catch((error) => {
			console.error("Failed to sign up", error);
			Alert.alert(error.message);
		});
}

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

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
				<Button onPress={() => handleSubmit(email, password)}>会員登録</Button>
				<View style={styles.footer}>
					<Link href="/auth/login" asChild={true} replace={true}>
						<TouchableOpacity>
							<Text style={styles.footerLink}>会員登録済みの方はこちら</Text>
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
		borderColor: "#DDDDDD",
		backgroundColor: "#FFFFFF",
		height: 48,
		padding: 8,
		fontSize: 16,
		marginBottom: 16,
	},
	footer: {
		flexDirection: "row",
	},
	footerLink: {
		fontSize: 14,
		lineHeight: 24,
		color: "#467FD3",
		marginLeft: 8,
	},
});

export default Login;
