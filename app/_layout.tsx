import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="auth"
        options={{
          headerShown: true,
          headerTitle: "",
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="register"
        options={{
          headerShadowVisible: false,
          headerTitle: "",
        }}
      />
      <Stack.Screen
        name="signin"
        options={{
          headerShadowVisible: false,
          headerTitle: "",
        }}
      />
    </Stack>
  );
}
