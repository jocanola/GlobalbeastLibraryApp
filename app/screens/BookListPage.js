import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppHeader from "../components/AppHeader";
import BookDesc from "../components/BookDesc";
import Categories from "../components/Categories";
import RecentBook from "../components/RecentBook";
import SearchBar from "../components/SearchBar";
import TrendingBooks from "../components/TrendingBooks";

export default function BookListPage() {
  return (
    <View style={styles.container}>
      <AppHeader />
      <SearchBar />
      <Categories showCat />
      <RecentBook />
      <TrendingBooks />
      <BookDesc />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
