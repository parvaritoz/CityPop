import React from "react";
import { StyleSheet, Text } from "react-native";
import AppButton from "../components/AppButton";

export default function HomeScreen() {
  return (
    <>
      <Text style={styles.text}>CityPop</Text>
      <AppButton
        title="SEARCH BY CITY"
        onPress={() => console.log("Button Tapped!")}
      />
      <AppButton
        title="SEARCH BY COUNTRY"
        onPress={() => console.log("Button 2 Tapped.")}
      />
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    justifyContent: "center",

    fontSize: 35,

    fontWeight: "bold",
    marginTop: "60%",
  },
});
