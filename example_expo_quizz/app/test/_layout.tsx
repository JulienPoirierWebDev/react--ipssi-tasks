import { Stack } from "expo-router";

export default function ProtectedLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Je suis une route protégée !" }}
      />
    </Stack>
  );
}
