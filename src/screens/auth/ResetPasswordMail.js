import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Button from '../../components/Button';
import Title from '../../components/Title';
class ResetPasswordMail extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            text: ''
        };
    }

    static navigationOptions = {
        headerStyle: {
            borderBottomWidth: 0
        }
    };

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image 
                    source={ require('../../assets/logomail.png') }
                    style={{ width: 201, height: 151 }}
                />
                <View style= {{ marginVertical: 25 }}>
                    <Title title='Check your email'/>
                </View>
                <Text style={{ fontSize: 14, color: '#ABB4BD', textAlign: 'center' }}>You have sent you a reset password link on your registered email address</Text>
                <View style={{ marginTop: 30 }}>
                    <Button title='Go to Email'/>
                </View>
            </View>
        )
    }
}

export default ResetPasswordMail;