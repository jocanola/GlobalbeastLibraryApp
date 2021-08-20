import React from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import { ListItem } from "react-native-elements";

export default function RecentBook() {
  const list = [
    {
      name: "Amy Farha",
      avatar_url:
        "https://www.skipprichard.com/wp-content/uploads/2014/12/9780803737396.jpg",
      subtitle: "Vice President",
    },
    {
      name: "Chris Jackson",
      avatar_url:
        "https://bukovero.com/wp-content/uploads/2016/07/Harry_Potter_and_the_Cursed_Child_Special_Rehearsal_Edition_Book_Cover.jpg",
      subtitle: "Vice Chairman",
    },
    {
      name: "Chris Jackson",
      avatar_url:
        "https://www.skipprichard.com/wp-content/uploads/2014/12/9780803737396.jpg",
      subtitle: "Vice Chairman",
    },
    {
      name: "Chris Jackson",
      avatar_url: "https://editorial.designtaxi.com/news-puffin19032015/2.jpg",
      subtitle: "Vice Chairman",
    },
    // more items
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Library</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {list.map((l, i) => (
          <ListItem key={i} containerStyle={styles.categoryList}>
            <ListItem.Content>
              <Image source={{ uri: l.avatar_url }} style={styles.Img} />
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
    shadowColor: "#000",
  },
  Img: {
    width: 100,
    height: 150,
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
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4.0,
    elevation: 5,
  },
});
