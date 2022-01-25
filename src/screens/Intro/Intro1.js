import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

const Intro1 = () => {
  const [name, setName] = useState("Adam Harmes");

  const offset = useSharedValue(300);
  const offsetTextInput = useSharedValue(300);
  const animatedStyles = useAnimatedStyle(() => {
    return { transform: [{ translateX: offset.value }] };
  });

  const animatedTextInputStyles = useAnimatedStyle(() => {
    return { transform: [{ translateX: offsetTextInput.value }] };
  });

  useEffect(() => {
    offset.value = withSpring(0);
    setTimeout(() => {
      offsetTextInput.value = withSpring(0);
    }, 300);
  }, []);

  return (
    <View style={styles.container}>
      <View style={[{ justifyContent: "center", flex: 1 }]}>
        <Animated.Text
          style={[
            animatedStyles,
            {
              fontWeight: "700",
              fontSize: 30,
              color: "white",
              position: "absolute",
              top: 0,
            },
          ]}
        >
          HI!{"\n"}WHAT'S YOUR NAME?
        </Animated.Text>
        <Animated.View
          style={[
            animatedTextInputStyles,
            {
              alignSelf: "center",
            },
          ]}
        >
          <TextInput
            autoFocus
            value={name}
            onChangeText={setName}
            style={{
              color: "white",
              fontSize: 30,
              fontWeight: "700",
            }}
          />
        </Animated.View>
      </View>
    </View>
  );
};

export default Intro1;

const styles = StyleSheet.create({
  container: {
    paddingTop: "15%",
    paddingHorizontal: "5%",
    flex: 1,
    backgroundColor: "#00C3FF",
  },
});
