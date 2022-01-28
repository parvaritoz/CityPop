/**
 * @author Reza Parvar, 2022-01-28
 * @version 1.0.0
 */
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ShowPopulation from "../components/ShowPopulation";
import colors from "../config/colors";

export default function CityPopulation({ navigation }) {
  const data = navigation.state.params;
  return (
    <View style={styles.container}>
      <Text style={styles.cityText}>{data.toponymName}</Text>
      <ShowPopulation title={data.population}></ShowPopulation>
    </View>
  );
}

/**
 * Styling the screen using StyleSheet.
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: 30,
    color: colors.onyx,
    fontWeight: "bold",
    marginBottom: "5%",
  },
  cityText: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: "5%",
    color: colors.onyx,
  },
});
