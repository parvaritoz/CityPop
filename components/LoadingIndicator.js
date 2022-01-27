/**
 * @author Reza Parvar, 2021-01-28
 * @version 1.0.0
 */
import React from "react";
import { View, ActivityIndicator, StyleSheet, Text } from "react-native";

/**
 * A component that is used when fetching data.
 */
export default function LoadingIndicator() {
  return (
    <View>
      <ActivityIndicator size="large" color="#000000" />
      <Text style={styles.loading}>Loading...</Text>
    </View>
  );
}

/**
 * Styling the component using StyleSheet. 
 */
const styles = StyleSheet.create({
  loading: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: 20,
  },
});
