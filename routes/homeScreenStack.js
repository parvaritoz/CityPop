import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import HomeScreen from "../screens/HomeScreen";
import SearchCity from "../screens/SearchCity";
import SearchCountry from "../screens/SearchCountry";
import CityPopulation from "../screens/CityPopulation";
import Cities from "../screens/Cities";

const screens = {
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      title: "",
      headerShown: false,
    },
  },
  City: {
    screen: SearchCity,
    navigationOptions: {
      title: "CityPop",
    },
  },
  Country: {
    screen: SearchCountry,
    navigationOptions: {
      title: "CityPop",
    },
  },
  CityPopulation: {
    screen: CityPopulation,
    navigationOptions: {
      title: "Search By City",
    },
  },
  Cities: {
    screen: Cities,
    navigationOptions: {
      title: "Search By Country",
    },
  }
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
