import React from 'react'
import {
  Text,
  StyleSheet
} from 'react-native'

export default ({ title, value }) => (
    <Text style={ styles.text }>{ title }  <Text style={ styles.textTitle }>{ value }</Text></Text>
)

const styles = StyleSheet.create({
    text: {
        fontSize: 24, 
        color: '#1D2029'
    },
    textTitle: {
        fontSize: 24, 
        color: '#FF1654'
    }
})

