/**
 * @author Reza Parvar, 2022-01-28
 * @version 1.0.0
 */

import React, { useState } from "react";
import { Text, StyleSheet, View, Modal, Pressable } from "react-native";
import TextButton from "../components/TextButton";
import colors from "../config/colors";
import SearchButton from "../components/SearchButton";
import LoadingIndicator from "../components/LoadingIndicator";

export default function SearchCity({ navigation }) {
  const [inValidText, setInvalidText] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [textInput, setTextInput] = useState("");
  const [load, setLoad] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  /**
   * This function fetches the data using cityName. 
   * The data is later used to get the population of the chosen city. 
   * @param cityName: Name of the chosen city. 
   */
  function fetchingCity(cityName) {
    fetch("http://api.geonames.org/searchJSON?name=" + cityName + "&featureClass=P&maxRows=1&username=weknowit")
    .then((response) => response.json())
    .then((response) => {
      setLoad(false);
      if (response.totalResultsCount > 0 && cityName != "") {
        navigation.navigate("CityPopulation", response.geonames[0]);
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
    fetchingCity(arg);
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>SEARCH BY CITY</Text>
        <TextButton
          placeholder="Enter a city"
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
