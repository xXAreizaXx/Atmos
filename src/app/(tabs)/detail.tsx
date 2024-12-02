// Expo
import { Entypo, Feather, FontAwesome5, FontAwesome6 } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import Constants from "expo-constants";

// ReactJS & React Native
import { StyleSheet, View, useColorScheme, ColorSchemeName } from "react-native";

// Components
import Button from "@components/Buttons";
import Error from "@components/Error";
import Loader from "@components/Loader";
import Typography from "@components/Typography";

// Constants
import COLORS from "@constants/colors";

// Hooks
import { useWeather } from "@hooks/useWeather";

export default function DetailScreen() {
    // Hooks
    const { data: weather, isError, isLoading } = useWeather();
    const colorScheme = useColorScheme();
    const router = useRouter();
    const styles = createStyles(colorScheme);

    // Functions
    const formatterText = (text: string) =>
        text.split(" ").map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");

    const formatVisibility = (visibility: number) => `${(visibility / 1000).toFixed(1)} km`;

    const formatTime = (timestamp: number) => new Date(timestamp * 1000).toLocaleTimeString();

    if (isLoading) return <Loader />;
    if (isError) return <Error />;
    if (!weather) return null;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Button onPress={() => router.back()} variant="primary">
                    <FontAwesome5 name="arrow-left" size={20} color={COLORS[colorScheme ?? "light"].background} />
                </Button>
                <Typography variant="h4" fontWeight="bold">Detalle</Typography>
            </View>

            <View style={styles.weatherContainer}>
                <Image
                    contentFit="cover"
                    source={{ uri: `https://openweathermap.org/img/wn/${weather?.current?.weather[0].icon}@2x.png` }}
                    style={styles.weatherIcon}
                />

                <View style={styles.weatherInfo}>
                    <View style={styles.weatherText}>
                        <FontAwesome6 name="temperature-half" size={25} color={weather?.current?.temp > 25 ? "red" : "blue"} />
                        <Typography fontWeight="bold" variant="h6">
                            {weather.current?.temp}°C
                        </Typography>
                    </View>
                    <View style={styles.weatherText}>
                        <Entypo name="water" size={25} color={COLORS[colorScheme ?? "light"].tint} />
                        <Typography fontWeight="bold" variant="h6">
                            {weather?.current?.humidity}%
                        </Typography>
                    </View>
                    <View style={styles.weatherText}>
                        <Entypo name="air" size={25} color={COLORS[colorScheme ?? "light"].tint} />
                        <Typography fontWeight="bold" variant="h6">
                            {formatterText(weather?.current?.weather[0]?.description)}
                        </Typography>
                    </View>
                </View>
            </View>

            <View style={[styles.weatherContainer, { flexDirection: "column", alignItems: "flex-start" }]}>
                <Typography variant="h5" fontWeight="bold">Detalles</Typography>
                <View style={styles.weatherText}>
                    <FontAwesome6 name="temperature-half" size={25} color={COLORS[colorScheme ?? "light"].tint} />
                    <Typography>Sensación térmica: {weather?.current?.feels_like}°C</Typography>
                </View>
                <View style={styles.weatherText}>
                    <Entypo name="water" size={25} color={COLORS[colorScheme ?? "light"].tint} />
                    <Typography> Humedad: {weather?.current?.humidity}%</Typography>
                </View>
                <View style={styles.weatherText}>
                    <FontAwesome5 name="tachometer-alt" size={25} color={COLORS[colorScheme ?? "light"].tint} />
                    <Typography> Presión: {weather?.current?.pressure} hPa</Typography>
                </View>
                <View style={styles.weatherText}>
                    <FontAwesome5 name="eye" size={25} color={COLORS[colorScheme ?? "light"].tint} />
                    <Typography> Visibilidad: {formatVisibility(weather?.current?.visibility)}</Typography>
                </View>
                <View style={styles.weatherText}>
                    <FontAwesome5 name="sun" size={25} color={COLORS[colorScheme ?? "light"].tint} />
                    <Typography> Índice UV: {weather?.current?.uvi}</Typography>
                </View>
            </View>

            <View style={[styles.weatherContainer, { flexDirection: "column", alignItems: "flex-start" }]}>
                <Typography variant="h5" fontWeight="bold">Información Adicional</Typography>
                <View style={styles.weatherText}>
                    <Feather name="sunrise" size={25} color={COLORS[colorScheme ?? "light"].tint} />
                    <Typography> Amanecer: {formatTime(weather?.current?.sunrise)}</Typography>
                </View>
                <View style={styles.weatherText}>
                    <Feather name="sunset" size={25} color={COLORS[colorScheme ?? "light"].tint} />
                    <Typography> Atardecer: {formatTime(weather?.current?.sunset)}</Typography>
                </View>
                <View style={styles.weatherText}>
                    <FontAwesome5 name="wind" size={25} color={COLORS[colorScheme ?? "light"].tint} />
                    <Typography> Viento: {weather?.current?.wind_speed} m/s, {weather?.current?.wind_deg}°</Typography>
                </View>
            </View>
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
            paddingTop: Constants.statusBarHeight + 8,
        },
        header: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 16,
        },
        weatherContainer: {
            alignItems: "flex-start",
            backgroundColor: COLORS[colorScheme ?? "light"].surface,
            borderRadius: 12,
            elevation: 5,
            flexDirection: "row",
            padding: 16,
            shadowColor: COLORS[colorScheme ?? "light"].border,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.15,
            shadowRadius: 6,
            width: "100%",
            marginBottom: 16,
        },
        weatherText: {
            alignItems: "center",
            flexDirection: "row",
            gap: 12,
            marginVertical: 4,
        },
        weatherInfo: {
            flex: 1,
            gap: 12,
        },
        weatherIcon: {
            borderRadius: 100,
            backgroundColor: COLORS[colorScheme ?? "light"].highlight,
            borderWidth: 1,
            borderColor: COLORS[colorScheme ?? "light"].primary,
            width: 120,
            height: 120,
            marginRight: 16,
        },
        sectionTitle: {
            marginBottom: 8,
            borderBottomWidth: 2,
            borderBottomColor: COLORS[colorScheme ?? "light"].primary,
            paddingBottom: 4,
        },
    });

