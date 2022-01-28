/**
 * @author Reza Parvar, 2022-01-28
 * @version 1.0.0
 */
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import SearchCity from "../screens/SearchCity";
import SearchCountry from "../screens/SearchCountry";
import CityPopulation from "../screens/CityPopulation";
import Cities from "../screens/Cities";
import colors from "../config/colors";

/**
 * Handling the navigation of the application using StackNavigator.
 */
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
      title: "Home",
      headerTintColor: colors.black,
      headerStyle: {
        backgroundColor: colors.primary,
        borderBottomWidth: 0,
      },
    },
  },
  Country: {
    screen: SearchCountry,
    navigationOptions: {
      title: "Home",
      headerTintColor: colors.black,
      headerStyle: {
        backgroundColor: colors.primary,
        borderBottomWidth: 0,
      },
    },
  },
  CityPopulation: {
    screen: CityPopulation,
    navigationOptions: {
      title: "Back",
      headerTintColor: colors.black,
      headerStyle: {
        backgroundColor: colors.primary,
        borderBottomWidth: 0,
      },
    },
  },
  Cities: {
    screen: Cities,
    navigationOptions: {
      title: "Back",
      headerTintColor: colors.black,
      headerStyle: {
        backgroundColor: colors.primary,
        borderBottomWidth: 0,
      },
    },
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
