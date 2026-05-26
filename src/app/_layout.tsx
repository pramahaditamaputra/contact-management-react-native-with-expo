import "@/global.css";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { AppProvider } from "../providers/AppProvider";

export default function RootLayout() {
  return (
    <AppProvider>
      <StatusBar />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="index"
          options={{
            title: "Contacts",
          }}
        />
        <Stack.Screen
          name="detail-contact"
          options={{
            title: "Contact Details",
            presentation: "formSheet",
          }}
        />
      </Stack>
    </AppProvider>
  );
}
