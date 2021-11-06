import { StatusBar } from "expo-status-bar";
import React, { FunctionComponent } from "react";
import { StyleSheet, Text, View } from "react-native";
import Svg, { Circle, Line } from "react-native-svg";
import DataManager from "./src/DataManager";
import BaseExample from "./src/Wind";
//import Wind from './src/Wind';

export default function App() {
  return (
    <View style={styles.container}>
      <DataManager />

      {/*<StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "baseline",
    justifyContent: "flex-start",
  },
});
