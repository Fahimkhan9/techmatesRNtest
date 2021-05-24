
import React from 'react';

import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Signup from './screens/Signup';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
  
    <Stack.Navigator>
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

