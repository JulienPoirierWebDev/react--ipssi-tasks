import { Redirect } from "expo-router";
import { ScrollView, Text } from "react-native";

const ProtectedHome = () => {
  const isLoggedIn = true;

  if (!isLoggedIn) {
    Redirect({ href: "/" });
  }

  return (
    <ScrollView>
      <Text>Hello protected world</Text>
    </ScrollView>
  );
};

export default ProtectedHome;
