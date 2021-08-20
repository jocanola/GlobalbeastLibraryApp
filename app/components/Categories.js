import React from "react";

import { ScrollView, StyleSheet, Text, View } from "react-native";
import { ListItem, Avatar } from "react-native-elements";

export default function Categories({showCat}) {
  const list = [
    {
      name: "Amy Farha",
      avatar_url:
        "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
      subtitle: "Vice President",
    },
    {
      name: "Chris Jackson",
      avatar_url:
        "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
      subtitle: "Vice Chairman",
    },
    {
      name: "Chris Jackson",
      avatar_url:
        "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
      subtitle: "Vice Chairman",
    },
    {
      name: "Chris Jackson",
      avatar_url:
        "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
      subtitle: "Vice Chairman",
    },
    // more items
  ];
  return (
    <View style={styles.container}>
      {showCat?<Text style={styles.textStyle}>Categories</Text>:null}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {list.map((l, i) => (
          <ListItem key={i} containerStyle={styles.categoryList}>
            <Avatar rounded source={{ uri: l.avatar_url }} />
            <ListItem.Content>
              <ListItem.Title>{l.name}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  textStyle: {
    fontSize: 20,
    fontWeight: "800",
    margin: 5,
  },
  categoryList: {
    backgroundColor: "#f0f0f0",
    padding: 7,
    margin: 5,
    borderRadius: 10,
  },
});
