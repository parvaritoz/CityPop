import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import colors from "../config/colors";

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

const styles = StyleSheet.create({
  conatiner: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  textInput: {
    margin: "2%",
    borderWidth: 3,
    padding: 10,
    borderRadius: 15,
    width: "100%",
    borderColor: colors.black,
    fontSize: 25,
  },
});
