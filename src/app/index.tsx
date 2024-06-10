import "expo-router/entry";
import { Text, View, StyleSheet } from "react-native";

export const Index = () => {
	return (
		<View style={styles.container}>
			{/* Header */}
			<View>
				<Text>Memo App</Text>
				<Text>ログアウト</Text>
			</View>
			{/* List */}
			<View>
				{/* List Item */}
				<View>
					<Text>買い物リスト</Text>
					<Text>2020年12月24日 10:00</Text>
					<View>
						<Text>X</Text>
					</View>
				</View>
				<View>
					<Text>買い物リスト</Text>
					<Text>2020年12月24日 10:00</Text>
					<View>
						<Text>X</Text>
					</View>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	}
});

export default Index;
