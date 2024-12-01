// Dependencies
import React from "react";
import { TouchableOpacity, Text, StyleSheet, TextStyle, ViewStyle } from "react-native";

type ButtonVariant = "primary" | "secondary";

type TButton = {
  variant: ButtonVariant;
  onPress: () => void;
  title: string;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
};

const Button: React.FC<TButton> = ({
    variant,
    onPress,
    title,
    disabled = false,
    style,
    textStyle,
}) => {
    const styles = variant === "primary" ? primaryStyles : secondaryStyles;

    return (
        <TouchableOpacity
            style={[styles.button, disabled && styles.disabled, style]}
            onPress={onPress}
            disabled={disabled}
        >
            <Text style={[styles.text, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};

// Primary Button Styles
const primaryStyles = StyleSheet.create({
    button: {
        backgroundColor: "#007bff",
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignItems: "center",
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

// Secondary Button Styles
const secondaryStyles = StyleSheet.create({
    button: {
        backgroundColor: "#e0e0e0",
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignItems: "center",
    },
    text: {
        color: "#333333",
        fontSize: 16,
        fontWeight: "bold",
    },
    disabled: {
        backgroundColor: "#f0f0f0",
    },
});

export default Button;

// Example Usage
// <Button variant="primary" onPress={() => console.log('Primary button pressed')} title="Primary Button" />
// <Button variant="secondary" onPress={() => console.log('Secondary button pressed')} title="Secondary Button" disabled />
