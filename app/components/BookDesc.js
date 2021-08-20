import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";

export default function BookDesc({ title, bookDescProps}) {
  const [seeLess, setSeeLess] = useState(true);

  const bookDesc =
    "Our personal and political worlds are rife with arguments and disagreements, some of them petty and vitriolic some of them petty and vitriolic";
  const wordLength = seeLess ? 100 : bookDesc.length;
  const myTruncatedString = bookDesc.substring(0, wordLength);
  const TruncateCondition = () =>
    seeLess ? setSeeLess(false) : setSeeLess(true);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>What's it about</Text>
      <Text>
        {myTruncatedString}
        {seeLess && bookDesc.length > 100 ? " ..." : null}
      </Text>
      {bookDesc.length > 100 ? (
        <TouchableOpacity onPress={TruncateCondition}>
          <Text style={{ fontWeight: "500" }}>
            {!seeLess ? "see less" : "see more"}
          </Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
  },
});
