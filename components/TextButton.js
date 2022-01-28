/**
 * @author Reza Parvar, 2022-01-28
 * @version 1.0.0
 */
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import colors from "../config/colors";

/**
 * A component that is used on different screens. This component contains a textfield,
 * which gives the user the opportunity to write any city/country.
 */
export default function TextButton({ placeholder, onChangeText, value }) {
  return (
    <View style={styles.conatiner}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
      ></TextInput>
    </View>
  );
}

/**
 * Styling the component using StyleSheet.
 */
const styles = StyleSheet.create({
  conatiner: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  textInput: {
    margin: "2%",
    borderWidth: 2.5,
    padding: 10,
    borderRadius: 15,
    width: 300,
    borderColor: colors.onyx,
    fontSize: 25,
  },
});
