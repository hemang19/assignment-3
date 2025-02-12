import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

// ✅ Define the tab param list
type TabParamList = {
  Welcome: { username: string };
  Calgary: undefined;
  Edmonton: undefined;
};

// ✅ Ensure the correct navigation type is used
type NavigationProp = BottomTabNavigationProp<TabParamList, "Welcome">;

const HomeScreen = ({ route }: { route: { params: { username: string } } }) => {
  const { username } = route.params;
  const navigation = useNavigation<NavigationProp>(); // ✅ Correct navigation prop

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My New App, {username}!</Text>
      <Button title="Go to Calgary" onPress={() => navigation.navigate("Calgary")} />
      <Button title="Go to Edmonton" onPress={() => navigation.navigate("Edmonton")} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
});
