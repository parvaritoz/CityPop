import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ShowPopulation from '../components/ShowPopulation';
import colors from '../config/colors';

export default function CityPopulation({route, navigation}){
    return(
         <View style={styles.container}> 
            <Text style={styles.cityText}>Umeå</Text>
            <ShowPopulation title="89 045">
                  
            </ShowPopulation>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    text: {
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontSize: 30,
        color: colors.black,
        fontWeight: "bold",
        marginBottom: "5%",
    },
    cityText: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: "5%",
    }
})