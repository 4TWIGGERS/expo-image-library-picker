import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as MediaLibrary from "expo-media-library";
import Picker from "./picker";

export default function App() {
  // useEffect(() => {
  //   MediaLibrary.requestPermissionsAsync().then(() => {
  //     MediaLibrary.getAssetsAsync().then(data => {
  //       console.log("data", data);
  //     });
  //   });
  // }, []);

  return (
    <View style={styles.container}>
      <Picker />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
