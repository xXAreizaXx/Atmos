export type TWeatherResponse = {
    current: Current;
    lat: number;
    lon: number;
    timezone_offset: number;
    timezone: string;
};

export type Current = {
    clouds: number;
    dew_point: number;
    dt: number;
    feels_like: number;
    humidity: number;
    pressure: number;
    sunrise: number;
    sunset: number;
    temp: number;
    uvi: number;
    visibility: number;
    weather: Weather[];
    wind_deg: number;
    wind_speed: number;
};

export type Weather = {
    description: string;
    icon: string;
    id: number;
    main: string;
};

export type TWeather = {
    city: string;
    temperature: number;
    humidity: number;
    status: string;
    wind: number;
    feelsLike: number;
};
