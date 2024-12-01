// External Dependencies
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_URL,
    params: {
        appid: process.env.EXPO_PUBLIC_API_KEY,
        lang: "es",
        units: "metric",
    },
    timeout: 10000,
});

export default axiosInstance;
