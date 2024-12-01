// Expo
import * as Device from "expo-device";
import * as Location from "expo-location";

// ReactJS & React Native
import { Platform } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

// Data
import { getWeather } from "@/data/weather";

// Domain
import { type TWeatherResponse } from "@/domain/weather";

// Types
type TUseWeather = {
    coordinates: TCordinates | null;
    data: TWeatherResponse;
    searchWeather: () => void;
    setCoordinates: (coordinates: { lat: number; lon: number }) => void;
};

type TCordinates = {
    lat: number;
    lon: number;
};

export const useWeather = (): TUseWeather => {
    // States
    const [coordinates, setCoordinates] = useState<TCordinates | null>(null);

    // Queries
    const { data: weather, refetch } = useQuery<TWeatherResponse>({
        queryKey: ["weather", coordinates],
        queryFn: () =>
            getWeather(coordinates?.lat as number, coordinates?.lon as number)
                .then((res) => {
                    return res;
                })
                .catch((error) => {
                    throw new Error(error);
                }),
        // enabled: !!coordinates,
        enabled: false,
    });

    // Functions
    const searchWeather = async () => {
        setCoordinates(coordinates);
        refetch();
    };

    // Effects
    useEffect(() => {
        async function getCurrentLocation() {
            if (Platform.OS === "android" && !Device.isDevice) return;

            let { status } = await Location.requestForegroundPermissionsAsync();

            if (status !== "granted") return;

            let location = await Location.getCurrentPositionAsync({});

            setCoordinates({
                lat: location.coords.latitude,
                lon: location.coords.longitude,
            });
        }

        getCurrentLocation();
    }, []);

    return {
        coordinates,
        data: weather as TWeatherResponse,
        searchWeather,
        setCoordinates,
    };
};
