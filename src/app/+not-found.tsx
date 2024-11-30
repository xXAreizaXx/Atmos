// Expo
import { Link, Stack } from "expo-router";

// React Native
import { StyleSheet, Text, View } from "react-native";

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{ title: "Oops!" }} />
            <View style={styles.container}>
                <Text style={styles.title}>Esta página no existe.</Text>

                <Link href="/home" style={styles.link}>
                    <Text style={styles.linkText}>Volver a la página de inicio</Text>
                </Link>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    link: {
        marginTop: 15,
        paddingVertical: 15,
    },
    linkText: {
        fontSize: 14,
        color: "#2e78b7",
    },
});