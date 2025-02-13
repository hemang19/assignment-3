import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import credentialsData from "../credentials.json"; // Import JSON file

type RootStackParamList = {
  SignIn: undefined;
  Home: { username: string };
};

type SignInScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "SignIn">;

const SignInScreen = () => {
  const navigation = useNavigation<SignInScreenNavigationProp>();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [formError, setFormError] = useState("");

  const validateSignIn = () => {

    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();
    let valid = true;
    setUsernameError("");
    setPasswordError("");
    setFormError("");

    // checks that the username is at least 5 characters long (white spaces are not counted)
    if (trimmedUsername.length < 5) {
      setUsernameError("Username must be at least 5 characters long!");
      valid = false;
    }
  
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(trimmedPassword)) {
      setPasswordError(
        "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character."
      );
      valid = false;
    }

    if (!valid) {
      return;
    }

    const user = credentialsData.users.find(
      (cred: { username: string; password: string }) => cred.username === trimmedUsername
    );

    if (!user) {
      setFormError("Username not found!");
      return;
    }

    if (user.password !== trimmedPassword) {
      setFormError("Incorrect password!");
      return;
    }

    // Navigate to Tab Navigator, passing username
    navigation.navigate("Home", { username: trimmedPassword });
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
      {usernameError ? <Text style={styles.error}>{usernameError}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}

      {formError ? <Text style={styles.error}>{formError}</Text> : null}

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
  error: {
    color: "red",
    marginBottom: 10,
  }
});
