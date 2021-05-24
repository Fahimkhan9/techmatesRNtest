import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import FlatButton from "../components/Button";
import SecondaryButton from "../components/SecondaryButton";
import StockCard from "../components/StockCard";
import InvestmentGuideCard from "../components/InvestmentGuideCard";

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Jessie</Text>
      <View style={styles.portfoliocard}>
        <Text style={styles.whiteColor}>Your total asset portfolio</Text>
        <View style={styles.profileinsidediv}>
          <Text style={styles.whiteColor}>N203,935</Text>

          <SecondaryButton text="Invest Now" />
        </View>
      </View>

      <View style={styles.plansHeader}>
        <Text style={styles.plansHeadertitle}>Best Plans</Text>
        <Text style={styles.plansHeadersubtitle}>See all</Text>
      </View>
      <View>
        <StockCard>HEllo world</StockCard>
      </View>

      <View
      //  style={styles.investmentguideheader}
      >
        <Text style={styles.investmentguideheadertitle}>Investment guide</Text>
      </View>
      <View>
        <InvestmentGuideCard />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontWeight: "bold",
    fontSize: 40,
    textAlign: "center",
    paddingBottom: 15,
  },
  subtitle: {
    fontWeight: "200",
    fontSize: 20,
    textAlign: "center",
    paddingBottom: 15,
  },
  portfoliocard: {
    backgroundColor: "#31A062",
    padding: 20,
    width: 350,
    margin: 20,
    borderRadius: 15,
  },
  profileinsidediv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  whiteColor: {
    color: "#FFFFFF",
    fontWeight: "normal",
    fontSize: 20,
  },
  plansHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    //   padding:20,
    width: 350,
    //   margin:20,
  },
  plansHeadertitle: {
    fontWeight: "bold",
    fontSize: 20,
    // textAlign: "center",
    // paddingBottom: 15,
  },
  plansHeadersubtitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#FE555D",
  },
  investmentguideheader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  investmentguideheadertitle: {
    fontWeight: "bold",
    fontSize: 20,
    alignSelf: "flex-start",
  },
});

export default HomePage;
