import React from "react";
import { View, Text, Button, Image, Linking, StyleSheet } from "react-native";

type CityScreenProps = {
  city: string;
  link: string;
};

const CityScreen: React.FC<CityScreenProps> = ({ city, link }) => {
  return (
    <View style={styles.container}>
      {/* ✅ City Title */}
      <Text style={styles.title}>{city}</Text>

      {/* ✅ City Image */}
      <Image
        source={{
          uri: city === "Calgary"
            ? "https://upload.wikimedia.org/wikipedia/commons/9/93/Downtown_Calgary_in_the_Evening.jpg"
            : "https://upload.wikimedia.org/wikipedia/commons/e/e3/Downtown_Edmonton_Skyline.jpg"
        }}
        style={styles.image}
      />

      {/* ✅ Button to City Page */}
      <Button title="Go to city page" onPress={() => Linking.openURL(link)} />

      {/* ✅ City Information */}
      <View style={styles.infoContainer}>
        <Text style={styles.info}>
          {city === "Calgary"
            ? "Calgary is known for its annual Stampede and beautiful mountain views."
            : "Edmonton is famous for its river valley and West Edmonton Mall."}
        </Text>
      </View>
    </View>
  );
};

export default CityScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  image: { width: 300, height: 200, marginBottom: 10 },
  infoContainer: { marginTop: 20, paddingHorizontal: 10 },
  info: { fontSize: 16, textAlign: "center", color: "gray" },
});
