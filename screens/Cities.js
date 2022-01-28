/**
 * @author Reza Parvar, 2022-01-28
 * @version 1.0.0
 */

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CityButton from "../components/CityButton";
import colors from "../config/colors";

export default function Cities({ navigation }) {
  const data = navigation.state.params;

  return (
    <View style={styles.container}>
      <Text style={styles.cityHeader}>Biggest cities in</Text>
      <Text style={styles.cityText}>{data[0].countryName}</Text>
      <CityButton
        title={data[0].toponymName}
        onPress={() => navigation.navigate("CityPopulation", data[0])}
      ></CityButton>
      <CityButton
        title={data[1].toponymName}
        onPress={() => navigation.navigate("CityPopulation", data[1])}
      ></CityButton>
      <CityButton
        title={data[2].toponymName}
        onPress={() => navigation.navigate("CityPopulation", data[2])}
      ></CityButton>
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
  cityText: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: "5%",
    color: colors.black,
    fontStyle: "italic",
  },
  cityHeader: {
    fontSize: 30,
    marginBottom: "5%",
    color: colors.black,
  },
});
