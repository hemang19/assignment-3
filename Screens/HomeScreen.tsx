import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

// Define the tab param list
type TabParamList = {
  Home: {username: string};
  Calgary: undefined;
  Edmonton: undefined;
};

type HomeScreenRouteProp = RouteProp<TabParamList, "Home">;
type NavigationProp = BottomTabNavigationProp<TabParamList, "Home">;

const HomeScreen = ({ route }: { route: HomeScreenRouteProp }) => {
  const { username } = route.params;
  const navigation = useNavigation<NavigationProp>(); 

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to My New App!</Text>
      <Text style={styles.usernameText}>{username}</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Calgary")}>
        <Text style={styles.buttonText}>Go to Calgary</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Edmonton")}>
        <Text style={styles.buttonText}>Go to Edmonton</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    padding: 20,
    backgroundColor: "#FFFFFF",
  },
  welcomeText: { 
    fontSize: 30, 
    fontWeight: "bold", 
    textAlign: "center", 
    marginBottom: 15, 
    color: "#FFA500", 
  },
  usernameText: { 
    fontSize: 24, 
    fontWeight: "600", 
    textAlign: "center", 
    marginBottom: 40, 
    color: "#87CEFA", 
  },
  button: { 
    backgroundColor: "#FFFFFF", 
    paddingVertical: 12, 
    paddingHorizontal: 30, 
    borderRadius: 8, 
    marginBottom: 20, 
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#87CEFA",
    elevation: 3, 
    shadowColor: "#87CEFA", 
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  buttonText: {
    color: "#FFA500", 
    fontSize: 18, 
    fontWeight: "bold", 
  },
});
