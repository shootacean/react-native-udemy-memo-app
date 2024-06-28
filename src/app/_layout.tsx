import { Stack } from "expo-router";
import { theme } from "../theme";

const Layout = () => {
	return (
		<>
			<Stack
				screenOptions={{
					headerStyle: {
						backgroundColor: theme.colors.primary,
					},
					headerTintColor: theme.colors.secondary,
					headerTitle: "ひらめきメモ",
					headerBackTitle: "Back",
					headerTitleStyle: {
						fontSize: 24,
						fontWeight: "bold",
					},
				}}
			/>
		</>
	);
};

export default Layout;
