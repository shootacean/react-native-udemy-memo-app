import { Link, router } from "expo-router";
import { useState } from "react";
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";

import Button from "../../components/Button";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function handleSubmit(): void {
		router.replace("/memo/list");
	}

	return (
		<View style={styles.container}>
			<View style={styles.inner}>
				<View>
					<Text style={styles.title}>Sign Up</Text>
					<TextInput
						style={styles.input}
						value={email}
						onChangeText={(text) => setEmail(text)}
						autoCapitalize="none"
						keyboardType="email-address"
						placeholder="Email Address"
						textContentType="emailAddress"
					/>
					<TextInput
						style={styles.input}
						value={password}
						onChangeText={(text) => setPassword(text)}
						autoCapitalize="none"
						secureTextEntry={true}
						placeholder="Password"
						textContentType="password"
					/>
				</View>
				<Button onPress={handleSubmit}>Sign up</Button>
				<View style={styles.footer}>
					<Text style={styles.footerText}>Already registered?</Text>
					<Link href="/auth/login" asChild={true}>
						<TouchableOpacity>
							<Text style={styles.footerLink}>Log in here!</Text>
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
	footerText: {
		fontSize: 14,
		lineHeight: 24,
	},
	footerLink: {
		fontSize: 14,
		lineHeight: 24,
		color: "#467FD3",
		marginLeft: 8,
	},
});

export default Login;
