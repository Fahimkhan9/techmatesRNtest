import React from "react"
import { StyleSheet, View, Text, Image } from "react-native"

export default function InvestmentGuideCard(props) {
  const {title,subtitle} =props
  return (
    <View
    style={{
      flex:1,
      paddingHorizontal:15
    }}
    >
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={styles.cardtitle}>{title}</Text>
          <Text numberOfLines={3}>
          {subtitle}
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
    // justifyContent:'center',
    width: "80%",
    // flex:1,
  
  },
  cardContent: {
    paddingHorizontal: 10,
  },
  cardtitle: {
    paddingVertical: 5,
    fontWeight: "400",
    fontSize: 15,
  },
  cardsubtitle: {
    lineHeight: 10,
  },
  cardImg: {
    alignSelf:"flex-end"
  },
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
