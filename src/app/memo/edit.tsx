import { View, TextInput, StyleSheet } from "react-native";

import Header from "../../components/Header";
import CircleButton from "../../components/CircleButton";
import Icon from "../../components/Icon";

const Edit = () => {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} value={"買い物\nリスト"} multiline/>
            </View>
            <CircleButton>
                <Icon name="check" size={40} color="#ffffff"/>
            </CircleButton>
        </View>
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
    }
});

export default Edit;
