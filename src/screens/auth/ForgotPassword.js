import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Title from '../../components/Title';
class ForgotPassword extends Component {

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
            <View style={{ flex: 1, paddingHorizontal: 35, marginTop: 30 }}>
                <View style={{ flex: 1 }}>
                    <Title title='Forgot Password'/>
                    <Text style={{ fontSize: 14, color: '#ABB4BD', marginTop: 20 }}>Please enter your registered email or mobile to reset your password</Text>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
                        <Input placeholder='Email / Mobile number'/>
                    </View>
                    <View style={{ flex: 2, justifyContent: 'center' }}>
                        <Button title='Recover Password'/>
                    </View>
                </View>
                <View style={{ flex: 1 }}></View>
            </View>
        )
    }
}

export default ForgotPassword;