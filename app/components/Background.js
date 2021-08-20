import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import BookDesc from "./BookDesc";
import BookDetail from "./BookDetail";

export default function Background({ children }) {
  return (
    <View style={styles.container}>
      <View style={styles.top}></View>
      <ScrollView>
        <BookDetail />
        {/* We will pass bookDesc as props here and title */}
        <BookDesc title="What's it about?" />
        <BookDesc title="Who is it for?" />
      </ScrollView>
      <View style={styles.bottom}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
  },
  top: {
    position: "absolute",
    flex: 0.7,
    width: "100%",
    backgroundColor: "#a0522d",
  },
  bottom: {
    position: "absolute",
    flex: 0.3,
    width: "100%",
    backgroundColor: "#faf0e6",
  },
});
