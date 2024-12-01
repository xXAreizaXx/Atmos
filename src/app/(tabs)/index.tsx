// Expo
import Constants from "expo-constants";

// ReactJS & React Native
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { StyleSheet, View, Dimensions, useColorScheme, ColorSchemeName } from "react-native";
import { useRef, useState } from "react";
import MapView, { Marker, PROVIDER_GOOGLE, type Region } from "react-native-maps";

// Components
import LogoAtmos from "@components/LogoAtmos";

// Hooks
import { useWeather } from "@hooks/useWeather";

// Constants
import COLORS from "@constants/colors";

import "react-native-get-random-values";

const MARKERS_DATA = [
    {
        id: "1",
        latitude: 6.208833,
        longitude: -75.567942,
        color: "#2F3136",
        name: "Parque Lleras",
        direction: "Cra. 38 #10-35, El Poblado",
    },
    {
        id: "2",
        latitude: 6.253333,
        longitude: -75.566498,
        color: "#A3EAD8",
        name: "Museo de Antioquia",
        direction: "Cl. 52 #52-43, La Candelaria",
    },
    {
        id: "3",
        latitude: 6.244819,
        longitude: -75.589128,
        color: "#E990BB",
        name: "Comuna 13",
        direction: "Calle 20N #110, San Javier",
    },
    {
        id: "4",
        latitude: 6.270344,
        longitude: -75.563787,
        color: "#EFD080",
        name: "Jardín Botánico",
        direction: "Cl. 73 #51D-14, Aranjuez",
    },
    {
        id: "5",
        latitude: 6.231986,
        longitude: -75.573885,
        color: "#98AFE9",
        name: "Parque de los Pies Descalzos",
        direction: "Cl. 58 #42-125, La Candelaria",
    },
    {
        id: "6",
        latitude: 6.230833,
        longitude: -75.577222,
        color: "#4E87EB",
        name: "Plaza Botero",
        direction: "Cra. 52 #52-43, La Candelaria",
    },
];

export default function App() {
    // Hooks
    const colorScheme = useColorScheme();
    const styles = createStyles(colorScheme);

    // Ref
    const mapRef = useRef<MapView>(null);

    // Hooks
    const { data: weather, setCoordinates } = useWeather();

    // States
    const [region, setRegion] = useState<Region | null>(null);

    // Functions
    const onRegionChange = (region: Region) => {
        setRegion(region);
    };

    return (
        <View style={styles.container}>
            <LogoAtmos width={100} height={100} fill={COLORS[colorScheme ?? "light"].tint} />

            <GooglePlacesAutocomplete
                fetchDetails
                GooglePlacesDetailsQuery={{ fields: "geometry" }}
                onPress={(data, details) => {
                    setCoordinates({
                        lat: details?.geometry?.location.lat as number,
                        lon: details?.geometry?.location.lng as number,
                    });
                    setRegion({
                        latitude: details?.geometry?.location.lat as number,
                        longitude: details?.geometry?.location.lng as number,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    });
                }}
                placeholder='Search'
                query={{ key: process.env.EXPO_PUBLIC_GOOGLE_API_KEY, language: "es"}}
            />

            <MapView
                // provider={PROVIDER_GOOGLE}
                mapType="standard"
                onRegionChange={onRegionChange}
                ref={mapRef}
                region={region as Region}
                showsUserLocation
                style={styles.mapStyle}
            >
                {MARKERS_DATA.map((marker) => (
                    <Marker
                        coordinate={{
                            latitude: marker.latitude,
                            longitude: marker.longitude,
                        }}
                        description={marker.direction}
                        key={marker.id}
                        pinColor={marker.color}
                        title={marker.name}
                    >
                    </Marker>
                ))}
            </MapView>
        </View>
    );
}

const createStyles = (colorScheme: ColorSchemeName) =>
    StyleSheet.create({
        container: {
            backgroundColor: COLORS[colorScheme ?? "light"].background,
            flex: 1,
            padding: 16,
            paddingTop: Constants.statusBarHeight,
        },
        mapStyle: {
            height: Dimensions.get("window").height - 250,
            width: Dimensions.get("window").width - 32,
        }
    });
