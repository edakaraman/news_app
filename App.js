import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  ScrollView,
  Image,
  Dimensions,
  Text
} from "react-native";
import news_data from "./src/json/news_data.json";
import NewsCard from "./src/components/NewsCard/NewsCard";
import news_banner_data from "./src/json/news_banner_data.json";

export default function App() {
  const renderNews = ({ item }) => <NewsCard news={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}> NEWS  </Text>
        <FlatList
          ListHeaderComponent={() => (
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {news_banner_data.map((bannerNews) => (
                <Image
                  style={styles.bannerImage}
                  source={{ uri: bannerNews.imageUrl }}
                />
              ))}
            </ScrollView>
          )}
          keyExtractor={item => item.u_id.toString()}
          data={news_data}
          renderItem={renderNews}
        ></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:20,
  },
  bannerImage: {
    height: Dimensions.get("window").height / 5,
    width: Dimensions.get("window").width/2,
  },
  headerText:{
    fontSize:40,
    fontWeight:"bold",
    textAlign: "center",
  }
});
