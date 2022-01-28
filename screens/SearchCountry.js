/**
 * @author Reza Parvar, 2021-01-28
 * @version 1.0.0
 */

import React from "react";
import { Text, StyleSheet, View, Modal, Pressable } from "react-native";
import { useState } from "react/cjs/react.development";
import LoadingIndicator from "../components/LoadingIndicator";
import SearchButton from "../components/SearchButton";
import TextButton from "../components/TextButton";
import colors from "../config/colors";

export default function SearchCountry({ navigation }) {
  const [textInput, setTextInput] = useState("");
  const [inValidText, setInvalidText] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [load, setLoad] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  //Chech spelling using regnex
  const spellingCheck = /^([a-zA-Z]+(?:. |-| |'))*[a-zA-Z]*$/;

  /**
   * This function fetches the data using name of a chosen country.
   * The data, countryCode, is late used to get the biggest cities in a chosen country.
   * @param countryName: Name of the country
   */
  function fetching_CountryCode(countryName) {
    fetch(
      "http://api.geonames.org/searchJSON?name=" +
        countryName +
        "&featureClass=A&maxRows=1&username=weknowit"
    )
      .then((response) => response.json())
      .then((response) => {
        setLoad(false);
        if (
          response.totalResultsCount > 0 &&
          countryName != "" &&
          countryName.match(spellingCheck)
        ) {
          fetching_BiggetsCities(response.geonames[0].countryCode);
        } else {
          setInvalidText(true);
          setModalVisible(true);
        }
      })
      .catch((error) => console.error(error));
  }

  /**
   * This function fetches the data using countryCode of a chosen country.
   * This data is used to get the biggiest cities in a chosen country.
   * @param countryCode: CountryCode of the chosen country.
   */
  function fetching_BiggetsCities(countryCode) {
    fetch(
      "http://api.geonames.org/searchJSON?country=" +
        countryCode +
        "&featureClass=P&orderby=population&maxRows=3&username=weknowit"
    )
      .then((response) => response.json())
      .then((response) => {
        setLoad(false);
        if (
          response.totalResultsCount > 0 &&
          countryCode != "" &&
          countryCode.match(spellingCheck)
        ) {
          navigation.navigate("Cities", response.geonames);
        } else {
          setInvalidText(true);
          setModalVisible(true);
        }
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  /**
   * This function handles the loadingIndicator and
   * fetches the final data to present to the use.
   * @param arg: Represents the text the user writes.
   */
  const getFinalData = (arg) => {
    setLoad(!load);
    fetching_CountryCode(arg);
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>SEARCH BY COUNTRY</Text>
        <TextButton
          placeholder="Enter a country"
          onChangeText={(textValue) => setTextInput(textValue)}
          value={textInput}
        />
        <SearchButton onPress={() => getFinalData(textInput)} />
        <View>{load && <LoadingIndicator />}</View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.container}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                Couldn't find, please try again.
              </Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
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
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: 30,
    marginBottom: "5%",
    color: colors.black,
    fontWeight: "bold",
    marginTop: "30%",
    marginBottom: "10%",
  },
  modalView: {
    margin: 20,
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 12,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: colors.fire_opal,
  },
  textStyle: {
    color: colors.white,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 17,
  },
});
