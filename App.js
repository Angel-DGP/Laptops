import { LaptopsList } from "./screens/LaptopsList";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LaptopsForm } from "./screens/LaptopsForm";
export default function App() {
  const StackLaptops = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StackLaptops.Navigator>
        <StackLaptops.Screen component={LaptopsList} name="LaptopsListNav" />
        <StackLaptops.Screen component={LaptopsForm} name="LaptopsFormNav" />
      </StackLaptops.Navigator>
    </NavigationContainer>
  );
}
