// Expo
import { Entypo, FontAwesome5, FontAwesome6 } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Link, useRouter } from "expo-router";
import Constants from "expo-constants";

// ReactJS & React Native
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { StyleSheet, View, Dimensions, useColorScheme, ColorSchemeName, TextInput } from "react-native";
import { useRef, useState } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

// Components
import Button from "@components/Buttons";
import LogoAtmos from "@components/LogoAtmos";
import Typography from "@components/Typography";

// Hooks
import { useWeather } from "@hooks/useWeather";

// Constants
import COLORS from "@constants/colors";

import "react-native-get-random-values";

export default function App() {
    // Hooks
    const colorScheme = useColorScheme();
    const router = useRouter();
    const styles = createStyles(colorScheme);

    // Ref
    const mapRef = useRef<MapView>(null);

    // Hooks
    const { data: weather, setCoordinates } = useWeather();

    // States
    const [place, setPlace] = useState<string | null>(null);

    // Functions
    const formatterText = (text: string) => {
        return text.split(" ").map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <LogoAtmos width={80} height={80} fill={COLORS[colorScheme ?? "light"].tint} />
                <Typography variant="h4" fontWeight="bold">Atmos</Typography>
            </View>

            <View style={styles.inputContainer}>
                <GooglePlacesAutocomplete
                    fetchDetails
                    GooglePlacesDetailsQuery={{ fields: "geometry" }}
                    onPress={(data, details) => {
                        setPlace(data.description);
                        setCoordinates({
                            lat: details?.geometry?.location.lat as number,
                            lon: details?.geometry?.location.lng as number,
                        });
                    }}
                    textInputProps={{
                        InputComp: TextInput,
                        placeholderTextColor: "gray",
                    }}
                    styles={{
                        textInputContainer: {
                            borderRadius: 8,
                        },
                        textInput: {
                            backgroundColor: COLORS[colorScheme ?? "light"].gray,
                            fontSize: 16,
                        },
                        description: {
                            color: "gray",
                        },
                        listView: {
                            borderRadius: 8,
                        },
                        poweredContainer: {
                            display: "none",
                        }
                    }}
                    placeholder='Buscar ubicación'
                    query={{ key: process.env.EXPO_PUBLIC_GOOGLE_API_KEY, language: "es"}}
                />

                <Button onPress={() => router.push("/history")} variant="primary">
                    <FontAwesome5 name="history" size={20} color={COLORS[colorScheme ?? "light"].background} />
                </Button>
            </View>

            {weather && (
                <>
                    <Link href="/detail">
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
                                    <Entypo name="water" size={24} color={COLORS[colorScheme ?? "light"].tint} />
                                    <Typography fontWeight="bold" variant="h6">
                                        {weather?.current?.humidity}%
                                    </Typography>
                                </View>
                                <View style={styles.weatherText}>
                                    <Entypo name="air" size={24} color={COLORS[colorScheme ?? "light"].tint} />
                                    <Typography fontWeight="bold" variant="h6">
                                        {formatterText(weather?.current?.weather[0]?.description)}
                                    </Typography>
                                </View>
                            </View>
                        </View>
                    </Link>

                    <MapView
                        mapType="standard"
                        ref={mapRef}
                        region={{
                            latitude: weather?.lat,
                            latitudeDelta: 0.005,
                            longitude: weather?.lon,
                            longitudeDelta: 0.005,
                        }}
                        showsUserLocation
                        style={styles.mapStyle}
                    >
                        <Marker
                            coordinate={{
                                latitude: weather?.lat,
                                longitude: weather?.lon,
                            }}
                            pinColor={COLORS[colorScheme ?? "light"].tint}
                            title={place as string}
                        />
                    </MapView>
                </>
            )}
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
        inputContainer: {
            backgroundColor: COLORS[colorScheme ?? "light"].surface,
            borderRadius: 8,
            flexDirection: "row",
            gap: 8,
            padding: 8,
            shadowColor: COLORS[colorScheme ?? "light"].border,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
        },
        weatherContainer: {
            alignItems: "flex-start",
            backgroundColor: COLORS[colorScheme ?? "light"].surface,
            borderRadius: 10,
            display: "flex",
            elevation: 5,
            flexDirection: "row",
            justifyContent: "space-around",
            padding: 16,
            shadowColor: COLORS[colorScheme ?? "light"].border,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            width: "100%",
        },
        weatherText: {
            alignItems: "center",
            flexDirection: "row",
            gap: 8,
        },
        weatherInfo: {
            gap: 8,
        },
        weatherIcon: {
            borderRadius: 100,
            borderStyle: "solid",
            backgroundColor: COLORS[colorScheme ?? "light"].highlight,
            borderWidth: 1,
            borderColor: COLORS[colorScheme ?? "light"].primary,
            width: 100,
            height: 100,
        },
        mapStyle: {
            borderColor: COLORS[colorScheme ?? "light"].border,
            borderRadius: 10,
            borderWidth: 1,
            height: Dimensions.get("window").height - 400,
            width: Dimensions.get("window").width - 32,
        },
        textInput: {
            backgroundColor: COLORS[colorScheme ?? "light"].gray,
            color: COLORS[colorScheme ?? "light"].text,
            fontSize: 16,
            borderRadius: 8,
            paddingHorizontal: 12,
        },
    });
