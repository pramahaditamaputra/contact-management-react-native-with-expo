import { SafeAreaListener } from "react-native-safe-area-context";
import { Uniwind } from "uniwind";
import { QueryProvider } from "./QueryProvider";
import { ReduxProvider } from "./ReduxProvider";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SafeAreaListener
      onChange={({ insets }) => {
        Uniwind.updateInsets(insets);
      }}
    >
      <ReduxProvider>
        <QueryProvider>{children}</QueryProvider>
      </ReduxProvider>
    </SafeAreaListener>
  );
};
