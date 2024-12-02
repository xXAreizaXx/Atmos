jest.mock("expo-router", () => ({
    useRouter: jest.fn(() => ({
        push: jest.fn(),
    })),
    Link: ({ children }: { children: React.ReactNode }) => children,
}));

jest.mock(
    "react-native-google-places-autocomplete",
    () => "GooglePlacesAutocomplete"
);
