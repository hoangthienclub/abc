import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Title from '../../components/Title';
class ResetPassword extends Component {

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
            <View style={{ flex: 1}}>
                <View style={{ flex: 3, paddingHorizontal: 35, paddingTop: 30 }}>
                    <View style={{ flex: 1 }}>
                        <Title title='Reset Password'/>
                    </View>
                    <Text style={{ fontSize: 14, color: '#ABB4BD', marginTop: 20 }}>Please enter your new password and confirm the password.</Text>
                    <View style={{ flex: 4 }}>
                        <Input placeholder='New Password'/>
                        <Input placeholder='Confirm New Password'/>
                    </View>
                    <View style={{ flex: 2, justifyContent: 'center' }}>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <Button title='Update'/>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 2 }}></View>
            </View>
        )
    }
}

export default ResetPassword;