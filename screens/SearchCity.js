import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import TextButton from '../components/TextButton';
import BackButton from '../components/BackButton';
import colors from '../config/colors';
import SearchButton from '../components/SearchButton';

export default function SearchCity(props) {
    return (
        <>
            <View style={styles.container}>
                {/*<BackButton/>*/}
                <Text style={styles.text}>SEARCH BY CITY</Text>
                <TextButton placeholder="Enter a city"/>
                <SearchButton/>
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
