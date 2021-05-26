import React from "react"
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView
} from "react-native"
import SecondaryButton from "../components/SecondaryButton"
import StockCard from "../components/StockCard"
import InvestmentGuideCard from "../components/InvestmentGuideCard"
import { useNavigation } from "@react-navigation/native"



const data =[
  {
    title:"Golden",
    subtitle:"30% Return",
    id:"1"
  },
  {
    title:"Silver",
    subtitle:"50% Return",
    id:"2"
  },
  {
    title:"Platine",
    subtitle:"90% Return",
  
    id:"3"
  },
  {
    title:"a",
    subtitle:"30% Return",

    id:"4"
  },
]

const d= [
  {
    title:"Basic type of investments",
    subtitle:"This is how you set your foot for 2020 Stock market recession. What’s next...",
    id:'1',
  },
 {
    title:"How much can you start wit..",
    subtitle:"What do you like to see? It’s a very different market from 2018. The way...",
    id:'2'
  },
   {
    title:"How much can you start wit..",
    subtitle:"What do you like to see? It’s a very different market from 2018. The way...",
    id:'3'
  },

]

const HomePage = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
    <ScrollView>
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
        <View
        style={styles.planslist}
        >

        <FlatList 
        data={data}
        // keyExtractor={({item}) => item.id }
        horizontal={true}
        renderItem={({item}) => (
          <View>
         <StockCard
         title={item.title}
        subtitle={item.subtitle}

         />
          </View>
        )}
        />

          
         

        
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
        data={d}
        // keyExtractor={({item}) => item.id }
       
        renderItem={({item}) => (
          <View>
<InvestmentGuideCard 

title={item.title}
subtitle={item.subtitle}
/>
          </View>
        )}
        />
         
       
        </View>
      </View>
    </ScrollView>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "flex-start",
  },
  title: {
    fontWeight: "bold",
    fontSize: 40,
    paddingBottom: 15,
    paddingLeft:15,
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
  planslist:{
   
  },
  investmentguideheader: {
    padding:10
  }
  ,
  investmentguideheadertitle: {
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "left",
    paddingLeft: 5,
  },
});

export default HomePage;
