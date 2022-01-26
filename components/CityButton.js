import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../config/colors';

export default function CityButton({title, onPress}){
    return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.populationButton} onPress={onPress}>
                    <View style={styles.container}>
                        <Text style={styles.populationText}>{title}</Text>
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
        backgroundColor: colors.white,
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
        fontSize: 35,
        color: colors.black,
    },
})