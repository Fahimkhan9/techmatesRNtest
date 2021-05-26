import React from "react"
import { StyleSheet, View, Text,  ImageBackground} from "react-native"

export default function StockCard(props) {
  const {title,subtitle} =props
  return (
    <View style={styles.card}>
    <ImageBackground
  source={require("../assets/stockimg1.png")}
    style={styles.bgimg}
    >
    <View style={styles.cardContent}>
        <Text>{title}</Text>
        <Text>{subtitle}</Text>
      </View>
    </ImageBackground>
      
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    padding:10,
    height:150,
   
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 20,
  },
  bgimg:{
    
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
 
  }
 
});
