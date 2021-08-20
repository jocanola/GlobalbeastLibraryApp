import React from "react";
import { TextInput } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { Input } from "react-native-elements/dist/input/Input";

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <Input
        placeholder="Title, authors and topics"
        leftIcon={{ type: "font-awesome", name: "search" }}
        style={styles.Input}
        onChangeText={(value) => this.setState({ comment: value })}
        inputContainerStyle={{
          backgroundColor: "#f0f0f0",
          borderBottomWidth: "none",
          borderRadius: 15,
          paddingLeft: 15,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  Input: {},
});
