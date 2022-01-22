import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderBackground } from "react-navigation-stack";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

export default function HomeScreen({navigation}) {

  const nagivateHandler_City = () =>{
    navigation.navigate('City')
  }
  const nagivateHandler_Country = () =>{
    navigation.navigate('Country')
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>CityPop</Text>
        <AppButton
          title="SEARCH BY CITY"
          onPress={nagivateHandler_City}
        />
        <AppButton
          title="SEARCH BY COUNTRY"
          onPress={nagivateHandler_Country}
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
    color: colors.black,
    fontWeight: "bold",
    marginTop: "30%",
    marginBottom: "20%",
  },
});