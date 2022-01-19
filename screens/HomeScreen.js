import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
import SearchCity from "./SearchCity";

export default function HomeScreen() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>CityPop</Text>
        <AppButton
          title="SEARCH BY CITY"
          onPress={SearchCity}
        />
        <AppButton
          title="SEARCH BY COUNTRY"
          onPress={() => console.log("COUNTRY BUTTON TAPPED!")}
        />
      </View>  
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    },
  text: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: 40,
    color: "red",
    fontWeight: "bold",
    marginTop: "30%",
    marginBottom: "20%",
  },
});