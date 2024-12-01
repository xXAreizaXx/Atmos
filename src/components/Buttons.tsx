// ReactJS & React Native
import { TouchableOpacity, StyleSheet, ViewStyle, ColorSchemeName, useColorScheme } from "react-native";
import { type ReactNode } from "react";

// Constants
import COLORS from "@constants/colors";

type ButtonVariant = "primary" | "secondary";

type TButton = {
  children: ReactNode;
  disabled?: boolean;
  onPress: () => void;
  style?: ViewStyle;
  variant: ButtonVariant;
};

export default function Button({ children, disabled = false, onPress, style, variant }: TButton) {
    // Hooks
    const colorScheme = useColorScheme();
    const styles = variant === "primary" ? createPrimaryStyles(colorScheme) : createSecondaryStyles(colorScheme);

    return (
        <TouchableOpacity
            disabled={disabled}
            onPress={onPress}
            style={[styles.button, disabled && styles.disabled, style]}
        >
            {children}
        </TouchableOpacity>
    );
};

const createPrimaryStyles = (colorScheme: ColorSchemeName) =>
    StyleSheet.create({
        button: {
            alignItems: "center",
            backgroundColor: COLORS[colorScheme ?? "light"].tint,
            borderRadius: 8,
            padding: 12,
            height: 45,
        },
        text: {
            color: "#ffffff",
            fontSize: 16,
            fontWeight: "bold",
        },
        disabled: {
            backgroundColor: "#cce0ff",
        },
    });

const createSecondaryStyles = (colorScheme: ColorSchemeName) =>
    StyleSheet.create({
        button: {
            alignItems: "center",
            backgroundColor: COLORS[colorScheme ?? "light"].tabIconSelected,
            borderRadius: 8,
            padding: 12,
            height: 45,
        },
        text: {
            color: "#000000",
            fontSize: 16,
            fontWeight: "bold",
        },
        disabled: {
            backgroundColor: "#f2f2f2",
        },
    });
