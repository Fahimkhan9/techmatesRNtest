
import React from 'react';

import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Signup from './screens/Signup';
import CreateAccount from './screens/CreateAccount';
import HomePage from './screens/HomePage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
  
    <Stack.Navigator>
    
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
      <Stack.Screen name="HomePage" component={HomePage} />


    </Stack.Navigator>
  </NavigationContainer>
  );
}

