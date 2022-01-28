/**
 * @author Reza Parvar, 2021-01-28
 * @version 1.0.0
 */

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../config/colors";

/**
 * A component that is used on different screens.
 * This component is used to present population of a chosen city
 * to the user.
 */
export default function ShowPopulation({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Population: </Text>
      <Text style={styles.populationText}>{title}</Text>
    </View>
  );
}

/**
 * Styling the component using StyleSheet.
 */
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: 150,
    width: 300,
    borderRadius: 15,
    backgroundColor: colors.primary,
    marginBottom: "4%",
    borderColor: colors.black,
    borderWidth: 2,
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
});
