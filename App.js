import { LaptopsList } from "./screens/LaptopsList";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
export default function App() {
  const StackLaptops = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StackLaptops.Navigator>
        <StackLaptops.Screen component={LaptopsList} name="LaptopsList" />
      </StackLaptops.Navigator>
    </NavigationContainer>
  );
}
