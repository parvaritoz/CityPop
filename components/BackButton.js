import React from 'react';
import {AntDesign} from '@expo/vector-icons';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import colors from '../config/colors';

export default function BackButton() {
    return (
        <> 
            <View style={styles.container}>
                <TouchableOpacity style={styles.button}>
                    <AntDesign name='back' size={40} style={styles.backIcon}/>
                </TouchableOpacity>
            </View>

        </>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent:"flex-start",
        alignItems:"flex-start",
        paddingLeft: 20,
        paddingTop: 30,
    },
    button: {
        backgroundColor: colors.white,
        borderRadius: 50,
        width: 60,
        height: 60,
    },
    backIcon: {
        color: colors.black,
    },
});