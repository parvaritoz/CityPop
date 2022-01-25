import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../config/colors';

export default function ShowPopulation({title}){
    return (
            <View style={styles.container}>
                <Text style={styles.title}>Population: </Text>
                <Text style={styles.populationText}>
                    {title}
                </Text>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        height: 150,
        width: 300,
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: "4%",
    },
    title: {
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: colors.black,
        fontSize: 20,
        marginBottom: "5%",
    },
    populationText: {
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: colors.black,
        fontSize: 40,
    },
})