import React from 'react'

import {View,Text,StyleSheet,Image,Button, TextInput} from 'react-native'


const CreateAccount = () => {
    return (
        <View style={styles.container}>
           <Text>Create Account</Text>
           <Text>Invest and double your income now</Text>
           <TextInput
           style={styles.input}
           placeholder='Full name'
           />
            <TextInput
           style={styles.input}
           placeholder='Email address'
           />
            <TextInput
           style={styles.input}
           placeholder='password'
           />
           <Button 
title='Create Account'
/>
<Button 
title='Aldready have an account'
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
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
      },
  });
  

export default CreateAccount
