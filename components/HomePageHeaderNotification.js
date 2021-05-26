import React from "react";
import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const HomePageHeaderNotification = () => {
  return (
    <View style={styles.header}>
      <Ionicons name="notifications-outline" size={24} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
  },
});

export default HomePageHeaderNotification;
