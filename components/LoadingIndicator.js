import React from "react";
import {View, ActivityIndicator, StyleSheet, Text} from "react-native";

export default function LoadingIndicator(){
    return(
        <View >
            <ActivityIndicator size='large' color="#000000" />
            <Text style={styles.loading}>Loading...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    loading:{
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontSize: 20,        
    },
})