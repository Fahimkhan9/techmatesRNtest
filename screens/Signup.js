import React from 'react'

import {View,Text,StyleSheet} from 'react-native'


const Signup = () => {
    return (
        <View style={styles.container}>
            <Text>Sing uP screen</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  

export default Signup
