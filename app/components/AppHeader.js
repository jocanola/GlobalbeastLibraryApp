import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";
import bokay from "../assets/bokay.jpeg";

export default function AppHeader() {
  return (
    <View style={styles.container}>
      <Avatar
        rounded
        source={{
          uri: "https://openclipart.org/image/2400px/svg_to_png/275692/1489798288.png",
        }}
      />
      <View style={styles.textStyle}>
        <Text style={styles.text}>HOME</Text>
      </View>
      <Avatar
        rounded
        source={{
          uri: "https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    paddingTop: 35,
  },
  textStyle: {
    marginTop: "auto",
    marginBottom: "auto",
  },
  text: {
    fontSize: 20,
    fontWeight: "800",
  },
});
