import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function BookDetail() {
  return (
    <View style={styles.mainContent}>
      <Image
        source={{
          uri: "https://www.skipprichard.com/wp-content/uploads/2014/12/9780803737396.jpg",
        }}
        style={styles.Img}
      />
      <View>
        <Text style={styles.textTitle}>Bench Town: Rheymatics</Text>
        <Text style={styles.textSubTitle}>Posted by Jokanola Yusuff</Text>
        <View style={styles.reviewProp}>
          <View>
            <Text style={styles.reviewName}>Review</Text>
            <Text style={styles.reviewValue}>4.7</Text>
          </View>
          <View>
            <Text style={styles.reviewName}>Pages</Text>
            <Text style={styles.reviewValue}>120</Text>
          </View>
          <View>
            <Text style={styles.reviewName}>Lang.</Text>
            <Text style={styles.reviewValue}>4.7</Text>
          </View>
          <View>
            <Text style={styles.reviewName}>Origin</Text>
            <Text style={styles.reviewValue}>UI</Text>
          </View>
        </View>
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  Img: {
    width: 150,
    height: 230,
    borderRadius: 10,
  },
  textTitle: {
    fontSize: 20,
    margin: 5,
    fontWeight: "600",
  },
  textSubTitle: {
    fontSize: 14,
    textAlign: "center",
    fontStyle: "italic",
  },
  reviewProp: {
    marginTop: 15,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  reviewName: {
    fontSize: 15,
    fontWeight: "600",
  },
  reviewValue: {
    textAlign: "center",
  },
});
