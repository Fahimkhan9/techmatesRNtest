import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Signup from "./screens/Signup";
import CreateAccount from "./screens/CreateAccount";
import HomePage from "./screens/HomePage";
import CreateAccountHeader from "./components/CreateAccountHeader";
import HomePageHeaderMenu from "./components/HomePageHeaderMenu";
import HomePageHeaderNotification from "./components/HomePageHeaderNotification";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Signup"
          component={Signup}
        />
        <Stack.Screen 
          options={{
            headerLeft: (props) => <CreateAccountHeader {...props} />,
            headerTitle: "",
          }}
          name="CreateAccount"
          component={CreateAccount}
        />
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{
            headerLeft: (props) => <HomePageHeaderMenu {...props} />,
            headerTitle: "",
            headerRight: (props) => <HomePageHeaderNotification {...props} />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
