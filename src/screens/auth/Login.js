import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
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
            <ImageBackground source={require('../../assets/Background.png')} style={{ flex: 1 }} resizeMode='cover'>
                <View style={{ flex: 1, paddingHorizontal: 35, backgroundImage: ''}}>
                    <View style={{ flex: 2.5 }}>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={require('../../assets/logo.png')}
                                style={{ width: 81.76, height: 70.56 }}
                            />
                            <Text style={{ fontSize: 21.5, color: '#1D2029' }}>Vermo</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row' }}>
                            <TouchableOpacity style={{ flex: 1 }}>
                                <View style={{
                                    backgroundColor: '#FFFFFF', width: '100%', height: 40, borderWidth: 1, borderColor: 'rgba(171,180,189,0.35)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginRight: 20, borderRadius: 3, shadowOpacity: 0.5,
                                    shadowColor: 'rgba(171,180,189,0.21)',
                                    shadowOffset: { height: 10, width: 0 }
                                }}>
                                    <Image
                                        source={require('../../assets/facebook.png')}
                                        style={{ width: 16, height: 16 }}
                                    />
                                    <Text style={{ fontSize: 12, color: '#1D2029', marginLeft: 10 }}>Facebook</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row' }}>
                            <TouchableOpacity style={{ flex: 1 }}>
                                <View style={{
                                    backgroundColor: '#FFFFFF', width: '100%', height: 40, borderWidth: 1, borderColor: 'rgba(171,180,189,0.35)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 20, borderRadius: 3, shadowOpacity: 0.5,
                                    shadowColor: 'rgba(171,180,189,0.21)',
                                    shadowOffset: { height: 10, width: 0 }
                                }}>
                                    <Image
                                        source={require('../../assets/google.png')}
                                        style={{ width: 16, height: 16 }}
                                    />
                                    <Text style={{ fontSize: 12, color: '#1D2029', marginLeft: 10 }}>Google</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flex: 2 }}>
                        <View style={{ flex: 1 }}>
                            <Input placeholder='Email' 
                                value={ email }
                                onChangeText={ this.onChangeText }
                                type='email'
                            />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Input placeholder='Password' 
                                value={ password }
                                onChangeText={ this.onChangeText }
                                secureTextEntry={ true }
                                type='password'
                            />
                        </View>
                        <View style={{ alignItems: 'flex-end', paddingTop: 20 }}>
                            <Text style={{ fontSize: 12, color: '#FF1654' }}
                                onPress={() => this.props.navigation.navigate('ForgotPassword')}
                            >Forgot Password?</Text>
                        </View>
                    </View>
                    <View style={{ flex: 2 }}>
                        <View style={{ flex: 2, justifyContent: 'center' }}>
                            <Button title='Login' 
                                onPress={ () => this.login() }
                            />
                        </View>
                        <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 12, color: '#ABB4BD' }}>Don't have an account?</Text>
                            <Text style={{ fontSize: 12, color: '#FF1654' }}
                                onPress={() => this.props.navigation.navigate('Register')}
                            > Register Now</Text>
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