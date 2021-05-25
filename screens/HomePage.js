import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import FlatButton from "../components/Button";
import SecondaryButton from "../components/SecondaryButton";
import StockCard from "../components/StockCard";
import InvestmentGuideCard from "../components/InvestmentGuideCard";

import { useNavigation } from "@react-navigation/native";

const data = [
  {
    title: "title",
    subtitle: "subtitle",
    id: "1",
  },
  {
    title: "titldsfse",
    subtitle: "subtitle",
    id: "2",
  },
  {
    title: "titsdfsdfle",
    subtitle: "subtitle",
    id: "3",
  },
  {
    title: "tisfdsftle",
    subtitle: "subtitle",
    id: "4",
  },
  {
    title: "titafdsfle",
    subtitle: "subtitle",
    id: "5",
  },
  {
    title: "fsdf",
    subtitle: "subtitle",
    id: "6",
  },
];

const HomePage = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Jessie</Text>
      {/* porfoliocard section */}
      <View style={styles.portfoliocard}>
        <Text style={styles.whiteColor}>Your total asset portfolio</Text>
        <View style={styles.profileinsidediv}>
          <Text style={styles.whiteColor}>N203,935</Text>

          <SecondaryButton
            text="Invest Now"
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>
      {/* plans section */}
      <View style={styles.plansection}>
        {/* plansheader section */}
        <View style={styles.plansHeader}>
          <Text style={styles.plansHeadertitle}>Best Plans</Text>
          <Text style={styles.plansHeadersubtitle}>See all</Text>
        </View>
        {/* planslist */}
        <View>

          <StockCard>Hello world</StockCard>
        </View>
      </View>
      {/* investment guide section */}
      <View>
        {/* investment guide section header */}
        <View style={styles.investmentguideheader}>
          <Text style={styles.investmentguideheadertitle}>
            Investment Guide
          </Text>
        </View>
        <View>
          <FlatList
            data={data.slice(0, 4)}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <InvestmentGuideCard />
              </TouchableOpacity>
            )}
          />
        </View>
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
  plansection: {
    padding: 20,
  },
  plansHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 350,
  },
  plansHeadertitle: {
    fontWeight: "bold",
    fontSize: 25,
    paddingLeft: 5,
  },
  plansHeadersubtitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#FE555D",
  },
  // investmentguideheader: {}
  // ,
  investmentguideheadertitle: {
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "left",
    paddingLeft: 5,
  },
});

export default HomePage;
