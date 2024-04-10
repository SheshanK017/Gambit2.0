import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Contact from "./components/Contact";
import FindPartner from "./components/FindPartner";
import Home from './components/Home';
import Navbar from "./components/Navbar";
import SecondPage from './components/SecondPage';
import Ss from "./components/Ss";
import TaskSelection from "./components/TaskSelection";
import Login from "./components/Login";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="FirstPage" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="FirstPage" component={Home} />
      <Stack.Screen name="SecondPage" component={SecondPage} />
      <Stack.Screen name="contactpage" component={Contact}/>
      <Stack.Screen name="FindPartner" component={FindPartner}/>
      <Stack.Screen name="Navbar" component={Navbar}/>
      <Stack.Screen name="TaskSelection" component={TaskSelection}/>
      <Stack.Screen name="ss" component={Ss}/>
      <Stack.Screen name="Login" component={Login}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

