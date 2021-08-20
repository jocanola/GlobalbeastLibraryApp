import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Input } from "react-native-elements";

export default function AddBookDetail() {
  return (
    <View style={styles.container}>
      <Text>Book Name</Text>
      <Input
        placeholder="Author's name or Lecturer"
        inputContainerStyle={styles.inputText}
        label="Author's name"
        labelStyle={styles.label}
      />
      <Input
        placeholder="Publisher"
        inputContainerStyle={styles.inputText}
        label="Publisher"
        labelStyle={styles.label}
      />
      <Input
        placeholder="Book Description"
        inputContainerStyle={styles.inputText}
        multiline={true}
        numberOfLines={4}
        label="Book Description"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  inputText: {
    width: "100%",
    alignSelf: "center",
    marginTop: 10,
    backgroundColor: "#dfe4ea",
    borderRadius: 10,
  },
  label: {
    padding: 0,
    fontWeight: "800",
  },
  inputTextArea: {
    width: "80%",
    height: 50,
  },
});
