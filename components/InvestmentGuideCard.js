import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export default function InvestmentGuideCard() {
  return (
    <View>
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={styles.cardtitle}>Basic type of investments</Text>
          <Text numberOfLines={3}>
            This is how you set your foot for 2020 Stock market recession.
            What’s next...
          </Text>
        </View>
        <View style={styles.cardImg}>
          <Image source={require("../assets/investmentguideimg.png")} />
        </View>
      </View>
      <View style={styles.horizonticallinecontainer}>
        <View style={styles.horizonticalline} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "row",
    width: "75%",
  },
  cardContent: {
    paddingHorizontal: 5,
  },
  cardtitle: {
    paddingVertical: 5,
    fontWeight: "400",
    fontSize: 15,
  },
  cardsubtitle: {
    lineHeight: 10,
  },
  // cardImg: {},
  horizonticallinecontainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  horizonticalline: {
    flex: 1,
    height: 1,
    backgroundColor: "black",
  },
});
