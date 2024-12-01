// Axios
import axiosInstance from "./instance";

export const fetchWeather = async (lat: number, lon: number) => {
    return await axiosInstance.get("", { params: { lat, lon } });
};
