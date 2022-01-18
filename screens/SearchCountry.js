import React from 'react';
import {Text, StyleSheet} from 'react-native';
import TextButton from '../components/TextButton';
import colors from '../config/colors';

export default function SearchCountry(props) {
    return (
        <>
            <Text style={styles.text}>SEARCH BY COUNTRY</Text>
            <TextButton placeholder="Enter a country"/>
        </>
    );
}
const styles = StyleSheet.create({
    text: {
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontSize: 40,
        marginBottom: "5%",
        color: colors.black,
        fontWeight: "bold",
        marginTop: "60%",
        marginBottom: "15%",
    }
});
