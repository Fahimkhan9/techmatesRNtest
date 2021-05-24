import React from 'react'

import {View,Text,StyleSheet,Image,Button} from 'react-native'


const Signup = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image 
            source={require('../assets/signupimg.png')}
            />
            <Text>Stay on top your finance with us </Text>
            <Text>We are your new financial Advisors
to recommed the best investments for you.</Text>
<Button 
title='Create Account'
onPress={() => navigation.navigate('CreateAccount') }
/>

<Button 
onPress={() => navigation.navigate('HomePage') }
title='Login'
/>
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
