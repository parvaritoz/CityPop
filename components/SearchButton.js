/**
 * @author Reza Parvar, 2021-01-28
 * @version 1.0.0
 */

import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import colors from "../config/colors";
import { AntDesign } from "@expo/vector-icons";

/**
 * A component that is used on different screens. This component is a button
 * with a search Icon, that allows the user to search by clicking on it.
 */
export default function SearchButton({ onPress }) {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <AntDesign name="search1" size={34} style={styles.searchIcon} />
        </TouchableOpacity>
      </View>
    </>
  );
}

/**
 * Styling the component using StyleSheet.
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: "10%",
  },
  button: {
    backgroundColor: colors.onyx,
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    shadowColor: "rgba(0,0,0, .5)",
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 2,
  },
  searchIcon: {
    color: colors.white,
  },
});
