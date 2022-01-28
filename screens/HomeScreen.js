/**
 * @author Reza Parvar, 2022-01-28
 * @version 1.0.0
 */
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

export default function HomeScreen({ navigation }) {
  const nagivateHandler_City = () => {
    navigation.navigate("City");
  };
  const nagivateHandler_Country = () => {
    navigation.navigate("Country");
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>CityPop</Text>
        <AppButton title="SEARCH BY CITY" onPress={nagivateHandler_City} />
        <AppButton
          title="SEARCH BY COUNTRY"
          onPress={nagivateHandler_Country}
        />
      </View>
    </>
  );
}

/**
 * Styling the screen using StyleSheet.
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: colors.primary,
  },
  text: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: 50,
    color: colors.onyx,
    fontWeight: "bold",
    marginBottom: "5%",
  },
});
