import React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";

export default function StockCard(props) {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text>{props.children}</Text>
        <Text>30$ return</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 20,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
