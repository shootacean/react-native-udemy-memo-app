import "expo-router/entry";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import MemoListItem from "../components/MemoListItem";

const Index = () => {
	return (
		<View style={styles.container}>
			{/* Header */}
			<Header />
			{/* List */}
			<View>
				{/* List Item */}
				<MemoListItem />
				<MemoListItem />
				<MemoListItem />
			</View>

			<View style={styles.circleButton}>
				<Text style={styles.circleButtonLabel}>+</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
	circleButton: {
		width: 64,
		height: 64,
		borderRadius: 64 / 2,
		backgroundColor: "#467FD3",
		justifyContent: "center",
		alignItems: "center",
		position: "absolute",
		right: 40,
		bottom: 40,
		// iOS
		shadowColor: "#000",
		shadowOpacity: 0.25,
		shadowRadius: 8,
		shadowOffset: { width: 0, height: 8 },
		// Android ( https://m3.material.io/styles/elevation/overview )
		elevation: 8,
	},
	circleButtonLabel: {
		color: "#FFFFFF",
		fontSize: 40,
		lineHeight: 40,
	},
});

export default Index;
