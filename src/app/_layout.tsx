
// Expo
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import FontAwesome from "@expo/vector-icons/FontAwesome";

// React Native
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useColorScheme } from "react-native";
import "react-native-reanimated";

// ReactJS
import { useEffect } from "react";

export { ErrorBoundary } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    // Hooks
    const [loaded, error] = useFonts({
        DmSans: require("../../assets/fonts/DMSans-Regular.ttf"),
        ...FontAwesome.font,
    });

    // Effects
    useEffect(() => {
        if (error) throw error;
    }, [error]);

    useEffect(() => {
        if (loaded) return;
      
        SplashScreen.hideAsync();
    }, [loaded]);

    if (!loaded) return null;

    return <RootLayoutNav />;
}

function RootLayoutNav() {
    // Hooks
    const colorScheme = useColorScheme();

    return (
        <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="+not-found" />
            </Stack>
        </ThemeProvider>
    );
}
