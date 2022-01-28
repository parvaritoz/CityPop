/**
 * @author Reza Parvar, 2021-01-28
 * @version 1.0.0
 */

import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import colors from "../config/colors";

/**
 * A component that is used on the home screen.This component contains
 * a button and a text, which later is used to navigate the app.
 *
 */
export default function AppButton({ title, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
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
  },
  button: {
    backgroundColor: colors.white,
    borderColor: "#00ffff",
    borderRadius: 15,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    width: "80%",
    margin: "2%",
    shadowColor: "rgba(0,0,0, .5)",
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 2,
  },
  text: {
    color: colors.onyx,
    fontWeight: "bold",
    fontSize: 18,
    textTransform: "uppercase",
    justifyContent: "center",
  },
});
