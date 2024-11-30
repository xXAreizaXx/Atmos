// Expo
import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

// ReactJS & React Native
import { type ComponentProps } from "react";
import { useColorScheme } from "react-native";

// Constants
import COLORS from "@constants/colors";

// Types
type TTabBarIconProps = {
    name: ComponentProps<typeof FontAwesome>["name"];
    color: string;
}

function TabBarIcon(props: TTabBarIconProps) {
    return <FontAwesome size={25} {...props} />;
}

export default function TabLayout() {
    // Hooks
    const colorScheme = useColorScheme();

    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: COLORS[colorScheme ?? "light"].tint }}>
            <Tabs.Screen name="index" options={{ tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />, title: "Home" }} />
        </Tabs>
    );
}