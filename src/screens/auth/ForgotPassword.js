import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class ForgotPassword extends Component {

    static navigationOptions = {
        headerStyle: {
            borderBottomWidth: 0
        }
    };

    backToLogin = () => {
        this.props.navigation.replace('Login');
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent'}}>
                <View style={{backgroundColor: '#fff', width: 700, height: 350, borderRadius: 5 }}>
                    <View style={ styles.header }>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{color: '#fff', fontSize: 28 }}>Forgot Password</Text>
                        </View>
                        <TouchableOpacity style={{ position: "absolute", top: 0, left: 0, height: 80, width: 80, justifyContent: 'center', alignItems: 'center'}}
                             onPress={ this.backToLogin }
                        >
                            <Icon
                                name='ios-arrow-round-back'
                                size={50}
                                color='#fff'
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 2, flexDirection: 'column', paddingHorizontal: 50, marginTop: 50 }}>
                        <View style={{ flex: 1 }}>
                            <Text>Email</Text>
                            <TextInput
                                onChangeText={value => onChangeText(type, value)}
                                style={ styles.input }
                                secureTextEntry={ false }
                                autoCapitalize='none'
                                autoCorrect={false}
                            />
                        </View>
                    </View>
                    <View style={{ flex: 2 }}>
                        <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row', paddingHorizontal: 50 }}>
                            <TouchableOpacity style={{ flex: 1 }}
                                onPress={() => this.props.navigation.replace('ResetPassword')}
                            >
                                <View style={ styles.buttonLogin }>
                                    <Text style={{ fontSize: 20, color: "#fff" }}
                                    >Send</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default ForgotPassword;


const styles =  StyleSheet.create({
    header: {
        backgroundColor: '#6291FF',
        // flex: 1,
        width: '100%',
        height: 80,
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        borderColor: '#CFD5DA', 
        borderWidth: 1, 
        paddingVertical: 10, 
        width: '100%' ,
        borderRadius: 5,
        height: 50,
        marginTop: 15
    },
    buttonLogin: {
        backgroundColor: '#6291FF',
        height: 50, 
        width: '100%', 
        justifyContent: 'center', 
        alignItems: 'center',
        borderRadius: 5
    }
})