import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Intro1 from "../screens/Intro/Intro1";
import Landing from "../screens/Intro/Landing";

const Stack = createNativeStackNavigator();

function Intro() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animation: "none" }}>
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="Intro" component={Intro1} />
    </Stack.Navigator>
  );
}

export default Intro;
