// Domain
import { type TWeatherResponse } from "@/domain/weather";

// Services
import { fetchWeather } from "@/services/weather";

export const getWeather = async (
    lat: number,
    lon: number
): Promise<TWeatherResponse> => {
    const { data } = await fetchWeather(lat, lon);

    return data;
};
