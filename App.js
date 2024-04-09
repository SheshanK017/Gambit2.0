import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Contact from "./components/Contact";
import FindPartner from "./components/FindPartner";
import Home from './components/Home';
import Navbar from "./components/Navbar";
import SecondPage from './components/SecondPage';
import TaskSelection from "./components/TaskSelection";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="contactpage" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="FirstPage" component={Home} />
      <Stack.Screen name="SecondPage" component={SecondPage} />
      <Stack.Screen name="contactpage" component={Contact}/>
      <Stack.Screen name="FindPartner" component={FindPartner}/>
      <Stack.Screen name="Navbar" component={Navbar}/>
      <Stack.Screen name="TaskSelection" component={TaskSelection}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

