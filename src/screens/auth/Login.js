import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground, TextInput, StyleSheet } from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { connect } from 'react-redux';
import { 
    login, 
    logInSuccess, 
    showSignInConfirmationModal, 
    logInFailure 
} from '../../actions/auth/actions';
import * as api from '../../common/api';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'thien301194@gmail.com',
            password: 'Aa123456?'
        };
    }

    static navigationOptions = {
        headerStyle: {
            borderBottomWidth: 0
        }
    };

    onChangeText = (key, value) => {
        this.setState({
          [key]: value
        })
    }

    login() {
        const { email, password } = this.state
        this.props.login(email, password)
    }
    

    render() {
        const { email, password } = this.state;
        return (
            <ImageBackground source={require('../../assets/Background.png')} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} resizeMode='cover'>
                <View style={{ backgroundColor: '#fff', paddingHorizontal: 50, width: 800, height: 550 }}>
                    <View style={{ flex: 2 }}>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={require('../../assets/logo.png')}
                            />
                        </View>
                    </View>
                    <View style={{ flex: 2, flexDirection: 'column'}}>
                        <View style={{ flex: 1 }}>
                            <Text>Username</Text>
                            <TextInput
                                onChangeText={value => onChangeText(type, value)}
                                style={ styles.input }
                                secureTextEntry={ false }
                                autoCapitalize='none'
                                autoCorrect={false}
                            />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text>Password</Text>
                            <TextInput
                                onChangeText={value => onChangeText(type, value)}
                                style={ styles.input }
                                secureTextEntry={ false }
                                autoCapitalize='none'
                                autoCorrect={false}
                            />
                        </View>
                    </View>
                    <View style={{ flex: 1.5 }}>
                        <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row' }}>
                            <TouchableOpacity style={{ flex: 1 }}>
                                <View style={ styles.buttonLogin }>
                                    <Text style={{ fontSize: 20, color: "#fff" }}>Login</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 15, color: '#4A90E2', textDecorationLine: 'underline' }}
                                onPress={() => this.props.navigation.navigate('ForgotPassword')}
                            > Forgot password</Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: async(email, password) => {
            try {
                dispatch(login())
                const data = await api.login(email, password);
                console.log(data)
                dispatch(logInSuccess(data.data))
                dispatch(showSignInConfirmationModal())
            }   
            catch (err) {
                console.log('errror from signIn: ', err)
                dispatch(logInFailure(err))
            }
        }
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);


const styles =  StyleSheet.create({
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