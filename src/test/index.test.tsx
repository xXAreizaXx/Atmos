// ReactJS & React Native
import { render } from "@testing-library/react-native";

// Screens
import MainScreen from "@/app/(tabs)";

jest.mock("@hooks/useWeather", () => ({
    useWeather: jest.fn(() => ({
        data: {
            current: {
                temp: 25,
                humidity: 50,
                weather: [{ description: "clear sky", icon: "01d" }],
            },
            lat: 37.7749,
            lon: -122.4194,
        },
        isError: false,
        isLoading: false,
        saveCoordinates: jest.fn(),
    })),
}));

describe("MainScreen", () => {
    it("Mostrar el texto 'Atmos'", () => {
        const { getByText } = render(<MainScreen />);

        expect(getByText("Atmos")).toBeTruthy();
    });
});
