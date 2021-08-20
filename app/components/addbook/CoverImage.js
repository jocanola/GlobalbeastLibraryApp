import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
// import { Button } from "react-native-elements/dist/buttons/Button";
import { Avatar, Input, Button } from "react-native-elements";

export default function CoverImage() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://www.skipprichard.com/wp-content/uploads/2014/12/9780803737396.jpg",
        }}
        style={styles.Img}
      />

      <Input
        placeholder="Enter Title of the Book or the material"
        inputContainerStyle={styles.inputText}
        label="Book Title"
        labelStyle={styles.label}
      />
      <Input
        placeholder="Browser file"
        inputContainerStyle={styles.inputText}
        label="Upload"
        labelStyle={styles.label}
      />
      <View style={styles.btnCon}>
        <Button title="Next" style={styles.button} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  Img: {
    width: 150,
    height: 230,
    borderRadius: 10,
    marginBottom: 15,
  },
  inputText: {
    width: "100%",
    alignSelf: "center",
    marginTop: 10,
    backgroundColor: "#dfe4ea",
    borderRadius: 10,
  },
  btnCon: {
    width: "100%",
  },
  button: {
    alignSelf: "flex-end",
    width: 100,
    marginVertical: 10,
    marginRight: 10,
    backgroundColor: "blue",
    borderRadius: 10,
  },
  label: {
    padding: 0,
    fontWeight: "800",
  },
});
