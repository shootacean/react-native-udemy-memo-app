import { router } from "expo-router";
import {
	KeyboardAvoidingView,
	StyleSheet,
	TextInput,
	View,
} from "react-native";
import CircleButton from "../../components/CircleButton";
import Icon from "../../components/Icon";

const Create = () => {
	return (
		<KeyboardAvoidingView behavior="height" style={styles.container}>
			<View style={styles.inputContainer}>
				<TextInput style={styles.input} multiline={true} />
			</View>
			<CircleButton onPress={() => router.back()}>
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
