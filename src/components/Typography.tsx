// ReactJS & React Native
import { type ReactNode } from "react";
import { Text, StyleSheet, useColorScheme, ColorSchemeName, type TextStyle } from "react-native";

// Constants
import COLORS from "@/constants/colors";

type TTypography = {
  align?: "left" | "center" | "right" | "justify";
  children: ReactNode;
  className?: TextStyle;
  color?: string;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2";
};

export default function Typography(props: TTypography) {
    // Props
    const { align, children, className, color, variant = "body1" } = props;

    // Hooks
    const colorScheme = useColorScheme();
    const styles = createStyles(colorScheme);

    // Functions
    const capitalize = (text: string) => text[0].toUpperCase() + text.slice(1);

    // Styles Array
    const textStyles = [
        align ? styles[`align${capitalize(align)}` as keyof typeof styles] : null,
        className,
        color ? { color } : null,
        styles.root,
        styles[variant],
    ].filter(Boolean);

    return <Text style={textStyles}>{children}</Text>;
}

const createStyles = (colorScheme: ColorSchemeName) =>
    StyleSheet.create({
        alignCenter: {
            textAlign: "center",
        },
        alignJustify: {
            textAlign: "justify",
        },
        alignLeft: {
            textAlign: "left",
        },
        alignRight: {
            textAlign: "right",
        },
        body1: {
            fontSize: 18,
        },
        body2: {
            fontSize: 16,
        },
        h1: {
            fontSize: 80,
        },
        h2: {
            fontSize: 60,
        },
        h3: {
            fontSize: 50,
        },
        h4: {
            fontSize: 40,
        },
        h5: {
            fontSize: 30,
        },
        h6: {
            fontSize: 20,
        },
        root: {
            color: COLORS[colorScheme ?? "light"].text,
            fontWeight: "normal",
            margin: 0,
            overflow: "hidden",
        },
        subtitle1: {
            fontSize: 18,
        },
        subtitle2: {
            fontSize: 16,
        },
    });
