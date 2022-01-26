import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CityButton from "../components/CityButton";
import colors from "../config/colors";

export default function Cities({ navigation }) {
    const data = navigation.state.params;
    console.log(navigation);
    return (
        <View style={styles.container}>
            <Text style={styles.cityText}>France</Text>
            <CityButton title="Paris"></CityButton>
            <CityButton title="Paris"></CityButton>
            <CityButton title="Paris"></CityButton>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cityText: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: "5%",
    color: colors.black,
  },
});
