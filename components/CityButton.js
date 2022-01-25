import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../config/colors';

export default function ShowPopulation(title, onPress){
    return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.populationButton} onPress={onPress}>
                    <View style={styles.container}>
                        <Text style={styles.populationText}>Stockholm</Text>
                    </View>
                </TouchableOpacity>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        height: 100,
        width: 260,
        borderRadius: 15,
        backgroundColor: colors.black,
        marginBottom: "4%",
    },
    populationButton: {
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
    populationText: {
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontSize: 25,
        color: colors.white,
    },
})