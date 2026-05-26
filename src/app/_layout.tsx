import "@/global.css";
import { Stack } from "expo-router";
import { AppProvider } from "../providers/AppProvider";

import * as SplashScreen from "expo-splash-screen";

// Set the animation options. This is optional.
SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

export default function RootLayout() {
  return (
    <AppProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen
          name="detail-contact"
          options={{
            title: "Contact Details",
            presentation: "formSheet",
            headerShown: true,
            headerBackButtonMenuEnabled: true,
            headerBackButtonDisplayMode: "minimal",
          }}
        />
      </Stack>
    </AppProvider>
  );
}
