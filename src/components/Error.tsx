// Expo
import Constants from "expo-constants";

// ReactJS & React Native
import { StyleSheet, View, useColorScheme, ColorSchemeName } from "react-native";
import { useEffect } from "react";
import Toast from "react-native-toast-message";

// Components
import LogoAtmos from "@components/LogoAtmos";
import Typography from "@components/Typography";

// Constants
import COLORS from "@constants/colors";

export default function Error() {
    // Hooks
    const colorScheme = useColorScheme();
    const styles = createStyles(colorScheme);

    // Effects
    useEffect(() => {
        Toast.show({
            autoHide: true,
            text1: "Error",
            text2: "Ha ocurrido un error al cargar la información",
            type: "error",
            visibilityTime: 5000,
        });
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <LogoAtmos width={80} height={80} fill={COLORS[colorScheme ?? "light"].tint} />
                <Typography variant="h4" fontWeight="bold">Atmos</Typography>
            </View>
            <Typography variant="h6">Ha ocurrido un error al cargar la información</Typography>
        </View>
    );
}

const createStyles = (colorScheme: ColorSchemeName) =>
    StyleSheet.create({
        container: {
            backgroundColor: COLORS[colorScheme ?? "light"].background,
            flex: 1,
            gap: 12,
            padding: 16,
            paddingVertical: Constants.statusBarHeight,
        },
        header: {
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
        },
    });