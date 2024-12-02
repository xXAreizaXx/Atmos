// Expo
import { FontAwesome5 } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Constants from "expo-constants";

// ReactJS & React Native
import { StyleSheet, View, useColorScheme, ColorSchemeName, FlatList, Text } from "react-native";
import { useEffect, useState } from "react";

// Components
import Button from "@components/Buttons";
import Typography from "@components/Typography";

// Constants
import COLORS from "@constants/colors";

// Utils
import { useWeather } from "@hooks/useWeather"; // Importa tu hook de uso del clima

export default function DetailScreen() {
    // Hooks
    const colorScheme = useColorScheme();
    const router = useRouter();
    const styles = createStyles(colorScheme);

    // Custom Hook
    const { history, getHistory } = useWeather();
    const [localHistory, setLocalHistory] = useState(history);

    // Fetch local history on mount
    useEffect(() => {
        const fetchHistory = async () => {
            const fetchedHistory = await getHistory();
            setLocalHistory(fetchedHistory);
        };
        fetchHistory();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Button onPress={() => router.back()} variant="primary">
                    <FontAwesome5 name="arrow-left" size={20} color={COLORS[colorScheme ?? "light"].background} />
                </Button>
                <Typography variant="h4" fontWeight="bold">
                    Historial
                </Typography>
            </View>
            <FlatList
                data={localHistory}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <View style={styles.timelineItem}>
                        <View style={styles.timelineDot} />
                        <View style={styles.timelineContent}>
                            <Text style={styles.timelineText}>
                                {`Registro #${index + 1}`}
                            </Text>
                            <Text style={styles.coordinatesText}>
                                Latitude: {item.lat.toFixed(2)}, Longitude: {item.lon.toFixed(2)}
                            </Text>
                        </View>
                    </View>
                )}
                ItemSeparatorComponent={() => <View style={styles.timelineSeparator} />}
                ListEmptyComponent={
                    <Text style={styles.emptyText}>No hay registros disponibles</Text>
                }
            />
        </View>
    );
}

const createStyles = (colorScheme: ColorSchemeName) =>
    StyleSheet.create({
        container: {
            backgroundColor: COLORS[colorScheme ?? "light"].background,
            flex: 1,
            padding: 16,
            paddingVertical: Constants.statusBarHeight,
        },
        header: {
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 16,
        },
        timelineItem: {
            flexDirection: "row",
            alignItems: "center",
        },
        timelineDot: {
            width: 10,
            height: 10,
            borderRadius: 5,
            backgroundColor: COLORS[colorScheme ?? "light"].primary,
            marginRight: 16,
        },
        timelineContent: {
            flex: 1,
            backgroundColor: COLORS[colorScheme ?? "light"].card,
            borderRadius: 8,
            padding: 12,
        },
        timelineText: {
            fontWeight: "bold",
            color: COLORS[colorScheme ?? "light"].text,
            marginBottom: 4,
        },
        coordinatesText: {
            color: COLORS[colorScheme ?? "light"].secondaryText,
        },
        timelineSeparator: {
            height: 1,
            backgroundColor: COLORS[colorScheme ?? "light"].divider,
            marginVertical: 8,
        },
        emptyText: {
            textAlign: "center",
            marginTop: 32,
            color: COLORS[colorScheme ?? "light"].secondaryText,
        },
    });