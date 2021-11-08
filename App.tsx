import React, { FunctionComponent } from "react";
import { StyleSheet, Text, View } from "react-native";
import DataManager from "./src/DataManager";

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
