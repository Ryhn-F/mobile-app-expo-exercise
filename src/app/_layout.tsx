import { Stack } from "expo-router";
import { StackScreen } from "expo-router/build/layouts/stack-utils/StackScreen.js";
import { StatusBar } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function RootLayout() {
  const inset = useSafeAreaInsets();
  return (
    <SafeAreaProvider
      style={{
        paddingTop: inset.top,
        paddingBottom: inset.bottom,
      }}
    >
      <StatusBar barStyle="light-content" />
      <Stack>
        <StackScreen name="index" options={{ headerShown: false }} />
        <StackScreen name="login" options={{ headerShown: false }} />
        <StackScreen name="signUp" options={{ headerShown: false }} />
        <StackScreen name="home" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaProvider>
  );
}
