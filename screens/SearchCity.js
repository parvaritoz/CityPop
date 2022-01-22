import React, { useState } from 'react';
import {Text, StyleSheet, View} from 'react-native';
import TextButton from '../components/TextButton';
import BackButton from '../components/BackButton';
import colors from '../config/colors';
import SearchButton from '../components/SearchButton';

export default function SearchCity(props) {

    const [textInput, setTextInput] = useState('');
    const [inValidText, setInvalidText] = useState(false);

 
    function fetchingCity_api(arg){

        setTimeout(3000);
        fetch('http://api.geonames.org/searchJSON?name=' + arg + '&featureClass=P&maxRows=1&username=weknowit')
        .then((response) => response.json())
        .then((response) => {
            if(arg != ''){
               console.log("City: " + response.geonames[0].toponymName + "  " + "Population: " + response.geonames[0].population);
            }
            else{
                setInvalidText(true);
                console.log(inValidText ,"Invalid input, please try again!");
            }
        })
        .catch((error) => console.error(error));
    }

    const getAPI = async (arg) => {
        fetchingCity_api(arg);
    }

    return (
        <>
            <View style={styles.container}>
                {/*<BackButton/>*/}
                <Text style={styles.text}>SEARCH BY CITY</Text>
                <TextButton placeholder="Enter a city" onChangeText={textValue=> setTextInput(textValue)} value={textInput}/>
                <SearchButton onPress={()=> getAPI(textInput)}/>
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    conatiner:{
        flex: 1, 
        justifyContent: "flex-start",
    },
    text: {
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontSize: 40,
        marginBottom: "5%",
        color: colors.black,
        fontWeight: "bold",
        marginTop: "30%",
        marginBottom: "10%",
    }
});