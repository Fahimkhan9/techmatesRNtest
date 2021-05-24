import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export default function InvestmentGuideCard(props) {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text>Basic type of investments</Text>
        <Text numberOfLines={3}>
          This is how you set your foot for 2020 Stock market recession. What’s
          next...
        </Text>
      </View>
      <View style={styles.cardImg}>
        <Image source={require("../assets/investmentguideimg.png")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    // borderRadius: 6,
    // elevation: 3,
    // backgroundColor: '#fff',
    // shadowOffset: { width: 1, height: 1 },
    // shadowColor: '#333',
    // shadowOpacity: 0.3,
    // shadowRadius: 2,
    // marginHorizontal: 4,
    // marginVertical: 6,
    display: "flex",
    flexDirection: "row",
    width: "67%",
    // flex:1,
  },
  cardContent: {
    // marginHorizontal: 18,
    // marginVertical: 20,
  },
  cardImg: {},
});
