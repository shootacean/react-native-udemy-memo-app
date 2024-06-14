import { router, useNavigation } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import CircleButton from "../../components/CircleButton";
import Icon from "../../components/Icon";
import LogoutButton from "../../components/LogoutButton";
import MemoListItem from "../../components/MemoListItem";

const List = () => {
	const navigation = useNavigation();

	useEffect(() => {
		navigation.setOptions({
			headerRight: () => <LogoutButton />,
		});
	}, [navigation]);

	return (
		<View style={styles.container}>
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
