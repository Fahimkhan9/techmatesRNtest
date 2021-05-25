import React from "react";

import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
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
      <Text style={styles.subtitle} numberOfLines={3} >
        We are your new financial Advisors to recommed the best investments for
        you.
      </Text>

      <View style={styles.createAccountBtn}>
        <FlatButton text="Create Account" onPress={goToCreateAccount} />
      </View>
      <View>
      <TouchableOpacity
      onPress={goToHomePage}
      >
        <Text style={styles.btn}>Login</Text>
        </TouchableOpacity>
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
  btn: {
    marginTop: 10,
    color: "#31A062",
    fontSize:17
  },
});

export default Signup;
