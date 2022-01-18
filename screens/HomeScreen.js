import React from "react";
import { StyleSheet, Text } from "react-native";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

export default function HomeScreen() {
  return (
    <>
      <Text style={styles.text}>CityPop</Text>
      <AppButton
        title="SEARCH BY CITY"
        onPress={() => console.log("CITY BUTTON TAPPED!")}
      />
      <AppButton
        title="SEARCH BY COUNTRY"
        onPress={() => console.log("COUNTRY BUTTON TAPPED!")}
      />
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: 40,
    marginBottom: "5%",
    color: colors.black,
    fontWeight: "bold",
    marginTop: "60%",
    marginBottom: "20%",
  },
});