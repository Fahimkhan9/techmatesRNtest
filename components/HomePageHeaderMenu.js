import React from 'react'

import {View,Text,StyleSheet} from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const HomePageHeaderMenu = () => {
    
    return (
        <View
         style={styles.header}
         >
          <Ionicons name="ios-menu-outline" size={24} color="black" />
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        padding:20
    }
})


export default HomePageHeaderMenu
