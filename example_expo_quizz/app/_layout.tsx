import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
const RootLayout = () => {
  const isContextLoggedIn = true;

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "black" }}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="quizz"
        options={{
          href: "/quizz",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="pencil" color={color} />
          ),
        }}
      />
      (
      <Tabs.Screen
        name="test"
        options={{
          href: isContextLoggedIn ? "/test" : null,
        }}
      />
      )
    </Tabs>
  );
};
export default RootLayout;
