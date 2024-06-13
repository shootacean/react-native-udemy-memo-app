import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";

import { Link } from "expo-router";

import Button from "../../components/Button";
import Header from "../../components/Header";

const Login = () => {
	return (
		<View style={styles.container}>
			<Header />
			<View style={styles.inner}>
				<View>
					<Text style={styles.title}>Log In</Text>
					<TextInput style={styles.input} value="Email" />
					<TextInput style={styles.input} value="Password" />
				</View>
				<Button>Log in</Button>
				<View style={styles.footer}>
					<Text style={styles.footerText}>Not registered?</Text>
					<Link href="/auth/signup" asChild={true}>
						<TouchableOpacity>
							<Text style={styles.footerLink}>Sign up here!</Text>
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
