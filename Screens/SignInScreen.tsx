import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
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
    navigation.navigate("Home", { username: trimmedUsername });
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

      <TouchableOpacity style={styles.button} onPress={validateSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  title: { 
    fontSize: 30, 
    fontWeight: "bold", 
    color: "#87CEFA",
    textAlign: "center", 
    marginBottom: 40,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
    width: "100%",
    borderRadius: 8,
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
  button: { 
    backgroundColor: "#FFFFFF", 
    paddingVertical: 12, 
    paddingHorizontal: 30, 
    borderRadius: 8, 
    marginTop: 20, 
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#87CEFA", 
    elevation: 3, 
    shadowColor: "#000", 
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
