import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SearchCity from "./screens/SearchCity";
import AppNavigation from './routes/homeScreenStack';


export default function App() {
  return (
    <>
      <AppNavigation/>
    </>
  ) 
}

