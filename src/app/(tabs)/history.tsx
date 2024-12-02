// Expo
import { FontAwesome5 } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Constants from "expo-constants";

// ReactJS & React Native
import { StyleSheet, View, useColorScheme, ColorSchemeName } from "react-native";

// Components
import Button from "@components/Buttons";
import Typography from "@components/Typography";

// Constants
import COLORS from "@constants/colors";

export default function DetailScreen() {
    // Hooks
    const colorScheme = useColorScheme();
    const router = useRouter();
    const styles = createStyles(colorScheme);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Button onPress={() => router.back()} variant="primary">
                    <FontAwesome5 name="arrow-left" size={20} color={COLORS[colorScheme ?? "light"].background} />
                </Button>
                <Typography variant="h4" fontWeight="bold">Historial</Typography>
            </View>
        </View>
    );
}

const createStyles = (colorScheme: ColorSchemeName) =>
    StyleSheet.create({
        container: {
            backgroundColor: COLORS[colorScheme ?? "light"].background,
            flex: 1,
            gap: 8,
            padding: 16,
            paddingVertical: Constants.statusBarHeight,
        },
        header: {
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
        },
    });