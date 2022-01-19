import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import BackButton from '../components/BackButton';
import SearchButton from '../components/SearchButton';
import TextButton from '../components/TextButton';
import colors from '../config/colors';


export default function SearchCountry(props) {
    return (
        <>
            <View style={styles.container}>
                <BackButton/>
                <Text style={styles.text}>SEARCH BY COUNTRY</Text> 
                <TextButton placeholder="Enter a country"/>
                <SearchButton onPress={()=> console.log("Search button tapped!")}/> 
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
