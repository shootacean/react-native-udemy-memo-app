import { ScrollView, StyleSheet, Text, View } from "react-native";

import CircleButton from "../../components/CircleButton";
import { Header } from "../../components/Header";

const Detail = () => {
	return (
		<View style={styles.container}>
			<Header />
			<View style={styles.memoHeader}>
				<Text style={styles.memoTitle}>買い物リスト</Text>
				<Text style={styles.memoDate}>2020年12月24日 10:00</Text>
			</View>
			<ScrollView>
				<Text style={styles.memoBodyText}>
					買い物リスト書体やレイアウトなどを確認するために用います。本文用なので使い方を間違えると不自然に見えることもありますので要注意。
					カタカナ語が苦手な方は「組見本」と呼ぶとよいでしょう。なお、組見本の「組」とは文字組のことです。活字印刷時代の用語だったと思います。このダミーテキストは自由に改変することが出来ます。主に書籍やウェブページなどのデザインを作成する時によく使われます。書体やレイアウトなどを確認するために用います。
					ダミーテキストはダミー文書やダミー文章とも呼ばれることがあります。カタカナ語が苦手な方は「組見本」と呼ぶとよいでしょう。主に書籍やウェブページなどのデザインを作成する時によく使われます。これは正式な文章の代わりに入れて使うダミーテキストです。
					買い物リスト書体やレイアウトなどを確認するために用います。本文用なので使い方を間違えると不自然に見えることもありますので要注意。
					カタカナ語が苦手な方は「組見本」と呼ぶとよいでしょう。なお、組見本の「組」とは文字組のことです。活字印刷時代の用語だったと思います。このダミーテキストは自由に改変することが出来ます。主に書籍やウェブページなどのデザインを作成する時によく使われます。書体やレイアウトなどを確認するために用います。
					ダミーテキストはダミー文書やダミー文章とも呼ばれることがあります。カタカナ語が苦手な方は「組見本」と呼ぶとよいでしょう。主に書籍やウェブページなどのデザインを作成する時によく使われます。これは正式な文章の代わりに入れて使うダミーテキストです。
				</Text>
			</ScrollView>
			<CircleButton>-</CircleButton>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	memoHeader: {
		backgroundColor: "#467FD3",
		height: 96,
		justifyContent: "center",
		paddingVertical: 24,
		paddingHorizontal: 19,
	},
	memoTitle: {
		color: "#FFFFFF",
		fontSize: 20,
		lineHeight: 32,
		fontWeight: "bold",
	},
	memoDate: {
		color: "#FFFFFF",
		fontSize: 12,
		lineHeight: 16,
	},
	memoBodyText: {
		paddingVertical: 32,
		paddingHorizontal: 27,
		fontSize: 16,
		lineHeight: 24,
	},
});

export default Detail;
