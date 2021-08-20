import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Index from "./app/navigation/Index";
export default function App() {
  return <Index />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
});
