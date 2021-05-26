import React from "react";

import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const CreateAccountHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <Ionicons
        name="chevron-back"
        size={24}
        color="black"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
  },
});

export default CreateAccountHeader;
