import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Title from '../../components/Title';
class Register extends Component {

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
            <View style={{ flex: 1, paddingHorizontal: 35, paddingTop: 30 }}>
                <View style={{ flex: 1 }}>
                    <Title title='Register to Vermo'/>
                </View>
                <View style={{ flex: 4 }}>
                    <View style={{ flex: 1 }}>
                        <Input placeholder='Full Name'/>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Input placeholder='Email'/>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Input placeholder='Mobile Number'/>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Input placeholder='Password'/>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Input placeholder='Confirm Password'/>
                    </View>
                </View>
                <View style={{ flex: 2, justifyContent: 'center' }}>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Button title='Register'/>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 11, color: '#ABB4BD' }}>By registering you agree to </Text>
                            <Text style={{ fontSize: 12, color: '#FF1654' }}>Terms & Conditions</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                            <Text style={{ fontSize: 11, color: '#ABB4BD' }}>and </Text>
                            <Text style={{ fontSize: 12, color: '#FF1654' }}>Privacy Policy </Text>
                            <Text style={{ fontSize: 11, color: '#ABB4BD' }}>of the Vermo</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default Register;