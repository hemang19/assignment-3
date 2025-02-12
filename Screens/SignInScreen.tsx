import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import credentialsData from "../credentials.json"; // Import JSON file

// ✅ Define navigation types
type RootStackParamList = {
  SignIn: undefined;
  Home: { username: string };
};

type SignInScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "SignIn">;

const SignInScreen = () => {
  const navigation = useNavigation<SignInScreenNavigationProp>();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Function to validate username and password
  const validateSignIn = () => {
    const user = credentialsData.users.find(
      (cred: { username: string; password: string }) => cred.username === username
    );

    if (!user) {
      Alert.alert("Error", "Username not found!");
      return;
    }

    if (user.password !== password) {
      Alert.alert("Error", "Incorrect password!");
      return;
    }

    // ✅ Navigate to Tab Navigator, passing username
    navigation.navigate("Home", { username });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Sign In" onPress={validateSignIn} />
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 24, textAlign: "center", marginBottom: 20 },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
});
