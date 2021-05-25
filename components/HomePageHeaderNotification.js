import React from 'react'

import {View,Text,StyleSheet} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const HomePageHeaderNotification = () => {
    const navigation = useNavigation();
    return (
        <View
         style={styles.header}
         >
       <Ionicons name="notifications-outline" size={24} color="black" />
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        padding:20
    }
})


export default HomePageHeaderNotification
