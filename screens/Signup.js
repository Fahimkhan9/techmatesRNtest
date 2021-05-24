import React from "react";

import { View, Text, StyleSheet, Image, Button } from "react-native";
import FlatButton from "../components/Button";

const Signup = ({ navigation }) => {
  const goToCreateAccount = () => {
    navigation.navigate("CreateAccount");
  };
  const goToHomePage = () => {
    navigation.navigate("HomePage");
  };
  return (
    <View style={styles.container}>
      <Image source={require("../assets/signupimg.png")} />
      <Text style={styles.title}>Stay on top your finance with us </Text>
      <Text style={styles.subtitle}>
        We are your new financial Advisors to recommed the best investments for
        you.
      </Text>

      <View style={styles.createAccountBtn}>
        <FlatButton text="Create Account" onPress={goToCreateAccount} />
      </View>
      <View>
        <FlatButton text="Login" onPress={goToHomePage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 40,
    textAlign: "center",
    paddingVertical: 20,
  },
  subtitle: {
    fontWeight: "200",
    fontSize: 20,
    textAlign: "center",
    paddingBottom: 15,
  },
  createAccountBtn: {
    paddingVertical: 15,
  },
});

export default Signup;
