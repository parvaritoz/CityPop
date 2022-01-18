import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../config/colors';
import {AntDesign} from '@expo/vector-icons';

export default function SearchButton({title, onPress}) {
    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity style = {styles.button} onPress={onPress}>
                    <AntDesign name='search1' size={24} style={styles.searchIcon}/>
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        backgroundColor: colors.black,
        borderRadius: 50,
        width: 60,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        marginTop: "10%",
    },
    searchIcon: {
        color: colors.white,
    }
   
})
