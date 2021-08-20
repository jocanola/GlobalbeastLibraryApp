import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Categories from "../Categories";
import CoverImage from "./CoverImage";

export default function AddingBook() {
  return (
    <View style={styles.container}>
      <Categories />
      <CoverImage />
    </View>
  );
}

const styles = StyleSheet.create({});
