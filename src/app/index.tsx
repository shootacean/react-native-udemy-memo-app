import { Redirect } from "expo-router";

const Index = () => {
	return <Redirect href="/memo/list" />;
	// return <Redirect href="/memo/detail" />;
	// return <Redirect href="/memo/edit" />;
	// return <Redirect href="/memo/create" />;
	// return <Redirect href="/auth/login" />;
	// return <Redirect href="/auth/signup" />;
};

export default Index;
