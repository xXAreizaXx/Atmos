
// Expo
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import FontAwesome from "@expo/vector-icons/FontAwesome";

// ReactJS & React Native
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useColorScheme } from "react-native";
import { useEffect } from "react";
import "react-native-reanimated";

export { ErrorBoundary } from "expo-router";

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

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
        <QueryClientProvider client={queryClient}>
            <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
                <Stack>
                    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                    <Stack.Screen name="+not-found" />
                </Stack>
            </ThemeProvider>
        </QueryClientProvider>
    );
}
