import React from 'react';
import { StyleSheet, ImageBackground, Text, View} from 'react-native';
import AppButton from '../components/AppButton';


export default function HomeScreen() {
    
     return (
        <AppButton title = "SEARCH BY CITY" onPress={()=> console.log("Button Tapped!")}/>
    ); 
}
