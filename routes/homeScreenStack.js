import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import SearchCity from '../screens/SearchCity';
import SearchCountry from '../screens/SearchCountry';


const screens = {
    HomeScreen: {
        screen: HomeScreen,
        option: screenOptions,
    },
    City: {
        screen: SearchCity,
        option: screenOptions,
    }, 
    Country: {
        screen: SearchCountry,
        option: screenOptions,
    }
}

const screenOptions = ({ navigation }) => ({
    headerBackTitle: "CityPop",
    headerTransparent: true,
    titleShown: false,
    title: '',
});

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
