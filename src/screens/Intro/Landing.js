import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const Landing = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ANIMATION APP</Text>
      <Pressable
        onPress={() => navigation.navigate("Intro")}
        style={styles.btn}
      >
        <Text style={{ color: "white" }}>Continue</Text>
      </Pressable>
    </View>
  );
};

export default Landing;

const styles = StyleSheet.create({
  container: {
    paddingTop: "15%",
    paddingHorizontal: "5%",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#091A67",
  },
  text: { color: "white", fontWeight: "700", fontSize: 30 },
  btn: {
    position: "absolute",
    bottom: "10%",
    backgroundColor: "#FB009F",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 100,
  },
});
