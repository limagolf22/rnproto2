import React, { FunctionComponent } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import DataManager from "./src/DataManager";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <DataManager />
      </ScrollView>
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
