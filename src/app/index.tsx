import { Redirect, router } from "expo-router";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

import { auth } from "../config";

const Index = () => {
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// ログイン済みであればメモ一覧画面へ遷移
				router.replace("/memo/list");
			}
		});
	}, []);

	return <Redirect href="/auth/signup" />;
	// return <Redirect href="/auth/login" />;
	// return <Redirect href="/memo/list" />;
	// return <Redirect href="/memo/detail" />;
	// return <Redirect href="/memo/edit" />;
	// return <Redirect href="/memo/create" />;
};

export default Index;
