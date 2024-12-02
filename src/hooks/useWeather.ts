// Expo
import * as Device from "expo-device";
import * as Location from "expo-location";

// ReactJS & React Native
import { Platform } from "react-native";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Data
import { getWeather } from "@data/weather";

// Entities
import { TWeatherResponse } from "@domain/entities/weather";

type TUseWeather = {
    coordinates: TCordinates | null;
    history: TCordinates[];
    data: TWeatherResponse | undefined;
    isError: boolean;
    isLoading: boolean;
    saveCoordinates: (coordinates: TCordinates) => void;
    getHistory: () => Promise<TCordinates[]>;
};

type TCordinates = {
    lat: number;
    lon: number;
};

export const useWeather = (): TUseWeather => {
    // State
    const [coordinates, setCoordinates] = useState<TCordinates | null>(null);
    const [history, setHistory] = useState<TCordinates[]>([]);

    // Query
    const {
        data: weather,
        isLoading,
        isError,
    } = useQuery<TWeatherResponse>({
        queryKey: ["weather", coordinates],
        queryFn: () =>
            getWeather(coordinates?.lat as number, coordinates?.lon as number)
                .then((res) => res)
                .catch((error) => {
                    throw new Error(error);
                }),
        enabled: !!coordinates,
    });

    // Functions
    const saveCoordinates = async (newCoordinates: TCordinates) => {
        try {
            // Save current coordinates
            await AsyncStorage.setItem(
                "coordinates",
                JSON.stringify(newCoordinates)
            );
            setCoordinates(newCoordinates);

            // Update history
            const updatedHistory = [...history, newCoordinates];
            await AsyncStorage.setItem(
                "history",
                JSON.stringify(updatedHistory)
            );
            setHistory(updatedHistory);
        } catch (error) {
            console.log("Error saving coordinates:", error);
        }
    };

    const getCurrentLocation = async () => {
        if (Platform.OS === "android" && !Device.isDevice) {
            console.log("Must use physical device for location");
            return;
        }

        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
            console.log("Permission to access location was denied");
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        const newCoordinates = {
            lat: location.coords.latitude,
            lon: location.coords.longitude,
        };

        saveCoordinates(newCoordinates);
    };

    const getHistory = async (): Promise<TCordinates[]> => {
        try {
            const storedHistory = await AsyncStorage.getItem("history");
            return storedHistory ? JSON.parse(storedHistory) : [];
        } catch (error) {
            console.log("Error retrieving history:", error);
            return [];
        }
    };

    // Effects
    useEffect(() => {
        const loadStoredData = async () => {
            try {
                // Load coordinates
                const storedCoordinates =
                    await AsyncStorage.getItem("coordinates");
                if (storedCoordinates) {
                    setCoordinates(JSON.parse(storedCoordinates));
                } else {
                    await getCurrentLocation();
                }

                // Load history
                const storedHistory = await getHistory();
                setHistory(storedHistory);
            } catch (error) {
                console.log("Error loading stored data:", error);
            }
        };
        loadStoredData();
    }, []);

    return {
        coordinates,
        history,
        data: weather,
        isError,
        isLoading,
        saveCoordinates,
        getHistory,
    };
};
