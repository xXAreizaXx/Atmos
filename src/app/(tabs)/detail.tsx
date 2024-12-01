// Expo
import Constants from "expo-constants";

// ReactJS & React Native
import { StyleSheet, View, useColorScheme, ColorSchemeName } from "react-native";

// Components
import LogoAtmos from "@components/LogoAtmos";
import Typography from "@components/Typography";

// Constants
import COLORS from "@constants/colors";

export default function DetailScreen() {
    // Hooks
    const colorScheme = useColorScheme();
    const styles = createStyles(colorScheme);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <LogoAtmos width={80} height={80} fill={COLORS[colorScheme ?? "light"].tint} />
                <Typography variant="h4" fontWeight="bold">Atmos</Typography>
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