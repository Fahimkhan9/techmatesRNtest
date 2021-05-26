import React from "react"
import { StyleSheet, View, Text,  ImageBackground} from "react-native"

export default function StockCard(props) {
  const {title,subtitle,} =props

  return (
    <View style={styles.card}>
    <ImageBackground
  source={require(`../assets/stockimg1.png`)}
    style={styles.bgimg}
    >
    <View style={styles.cardContent}>
        <Text
        style={styles.cardtitle}
        >{title}</Text>
        <Text
        style={styles.cardsubtitle}
        >{subtitle}</Text>
      </View>
    </ImageBackground>
      
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    // padding:20,
    height:150,
    backgroundColor:'#F0C735',
   
    
   
  },
  cardtitle:{
    color:'#fff',
    fontSize:20,
    fontWeight:"300",
    textAlign:"left"
  },
  cardsubtitle:{
    color:'#fff',
    fontSize:15,
    fontWeight:"300",
    textAlign:"left"

  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 20,
    display:"flex",
    flexDirection:"column",
    justifyContent:'flex-start',
    alignItems:'flex-start'
  },
  bgimg:{
    
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
 
  }
 
});
