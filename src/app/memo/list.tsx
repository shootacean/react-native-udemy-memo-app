import { router } from "expo-router";
import { StyleSheet, View } from "react-native";
import CircleButton from "../../components/CircleButton";
import Header from "../../components/Header";
import Icon from "../../components/Icon";
import MemoListItem from "../../components/MemoListItem";

const List = () => {
	return (
		<View style={styles.container}>
			<Header />
			<View>
				<MemoListItem />
				<MemoListItem />
				<MemoListItem />
			</View>
			<CircleButton onPress={() => router.push("/memo/create")}>
				<Icon name="plus" size={40} color="#FFFFFF" />
			</CircleButton>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
});

export default List;
