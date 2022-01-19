import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

import colors from "../config/colors";

export default function AppButton({ title, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
   
  );
}

const styles = StyleSheet.create({
  container:{
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: colors.black,
    borderColor: "#00ffff",
    borderRadius: 15,
    borderColor: "red",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    width: "80%",
    margin: "2%",
  },
  text: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 18,
    textTransform: "uppercase",
    justifyContent: "center",
  },
});
