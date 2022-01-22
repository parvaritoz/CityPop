import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import { useState } from 'react/cjs/react.development';
import BackButton from '../components/BackButton';
import SearchButton from '../components/SearchButton';
import TextButton from '../components/TextButton';
import colors from '../config/colors';


export default function SearchCountry(props) {

    const [textInput, setTextInput] = useState('');
    const [inValidText, setInvalidText] = useState(false);

    function fetchingCountry_api(arg){
        setTimeout(3000);
        fetch('http://api.geonames.org/searchJSON?name=' + arg + '&featureClass=A&orderby=population&maxRows=1&username=weknowit')
        .then((response) => response.json())
        .then((response) => {
            if(arg != ''){
                console.log(response.geonames[0])
            }
            else{ 
                setInvalidText(true);
                console.log(inValidText, "Invalid input, please try again!");
            }
        })
        .catch((error) => console.log(error));
    }

    const getAPI = async (arg) => {
        fetchingCountry_api(arg);
    }

    return (
        <>
            <View style={styles.container}>
                {/*<BackButton/>*/}
                <Text style={styles.text}>SEARCH BY COUNTRY</Text> 
                <TextButton placeholder="Enter a country" onChangeText={textValue=> setTextInput(textValue)} value={textInput}/>
                <SearchButton onPress={()=> getAPI(textInput)}/> 
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: "flex-start",
    },
    text: {
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontSize: 40,
        color: colors.black,
        fontWeight: "bold",
        marginTop: "30%", 
        marginBottom: "10%",
    }
});
