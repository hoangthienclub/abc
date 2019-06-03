import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native'

export default ({ title, onPress, isLoading }) => (
    <TouchableOpacity onPress={ onPress }>
        <View style={ styles.button }>
            <Text style={ styles.buttonText }>{ title }</Text>
            {
                isLoading && (
                    <View style={ styles.activityIndicator }>
                        <ActivityIndicator color='#FF1493' />
                    </View>
                )
            }
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    button: {
        width: 315, 
        height: 46, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#FF1654', 
        borderRadius: 3, 
        shadowOpacity: 0.5,
        shadowColor: 'rgba(255,22,84,0.24)',
        shadowOffset: { height: 10, width: 0 }
    },
    buttonText: {
        fontSize: 14, 
        color: '#FFF'
    },
    activityIndicator: {
        transform: [{scale: 0.70}],
        marginTop: 3.5,
        marginLeft: 5
      }
})