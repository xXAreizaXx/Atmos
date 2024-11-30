// ReactJS & React Native
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>¡Bienvenido a Expo!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
});