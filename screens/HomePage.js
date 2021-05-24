
import React from 'react'
import {View,Text,StyleSheet,Button} from 'react-native'



const HomePage = () => {
    return (
        <View
        style={styles.container}
        >
            <Text>Welcome Jessie</Text>
            <View>
                <Text>Your total asset portfolio</Text>
                <View>
                    <Text>N203,935</Text>
                    <Button 
                    title="Invest now"
                    />
                </View>
            </View>

            <View>
            <Text>Best Plans</Text>
            <Text>See all</Text>

            </View>
            <View>
                <Text>Card goes herer</Text>
            </View>

            <View>
                <Text>
                    Investment guide
                </Text>
            </View>
            <View>
                <Text>Card goes here</Text>
            </View>
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

export default HomePage
