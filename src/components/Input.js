
import React from 'react'
import {
  TextInput,
  StyleSheet
} from 'react-native'

export default ({ placeholder, onChangeText, type, secureTextEntry, ...props }) => (
    <TextInput
        onChangeText={value => onChangeText(type, value)}
        placeholder= { placeholder }
        style={ styles.input }
        secureTextEntry={ secureTextEntry }
        autoCapitalize='none'
        autoCorrect={false}
        { ...props }
    />
)

const styles =  StyleSheet.create({
    input: {
        borderBottomColor: 'rgba(171,180,189,0.30)', 
        borderBottomWidth: 1, 
        paddingVertical: 10, 
        width: '100%' 
    }
})