import React from "react";

import { View, Text, StyleSheet, Image, Button, TextInput,TouchableWithoutFeedback,Keyboard} from "react-native";
import FlatButton from "../components/Button";

const CreateAccount = () => {
  return (
    <TouchableWithoutFeedback
    onPress={() => Keyboard.dismiss() }
    >
  <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>Invest and double your income now</Text>
      <TextInput style={styles.input} placeholder="Full name" textAlign='left' />
      <TextInput style={styles.input} placeholder="Email address"  textAlign='left' keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="password" textAlign='left'  keyboardType="visible-password" />

      <FlatButton text="Create Account" />

      {/* <FlatButton text="Already have an account"  /> */}
      <Text style={styles.btn}>Already have an account</Text>
    </View>
    </TouchableWithoutFeedback>
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    // paddingVertical:15,
    // paddingHorizontal:100,
    width: "80%",
    padding: 10,
   
    fontSize: 18,
    borderRadius: 18,
    marginVertical: 10,
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
  btn: {
    marginTop: 10,
    color: "#31A062",
  },
});

export default CreateAccount;
