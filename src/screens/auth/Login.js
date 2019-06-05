import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { 
    signIn
} from '../../actions/auth/actions';
import userApi from '../../api/userApi';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'binhdang@test.com',
            password: 'Binh@123456'
        };
    }

    static navigationOptions = {
        headerStyle: {
            borderBottomWidth: 0
        }
    };

    login = () => {
        const { email, password } = this.state
        this.props.signIn(email, password)
    }
    

    render() {
        const { email, password } = this.state;
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent'}}>
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
                            <Text>Email</Text>
                            <TextInput
                                onChangeText={(email) => this.setState({email})}
                                style={ styles.input }
                                secureTextEntry={ false }
                                autoCapitalize='none'
                                autoCorrect={false}
                                value={ email }
                                name="email"
                            />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text>Password</Text>
                            <TextInput
                                onChangeText={(password) => this.setState({password})}
                                style={ styles.input }
                                secureTextEntry={ true }
                                autoCapitalize='none'
                                autoCorrect={false}
                                value={ password }
                                name="password"
                            />
                        </View>
                    </View>
                    <View style={{ flex: 1.5 }}>
                        <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row' }}>
                            <TouchableOpacity style={{ flex: 1 }}
                                onPress={ this.login }
                            >
                                <View style={ styles.buttonLogin }>
                                    <Text style={{ fontSize: 20, color: "#fff" }}>Login</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 15, color: '#4A90E2', textDecorationLine: 'underline' }}
                                onPress={() => this.props.navigation.replace('ForgotPassword')}
                            > Forgot password</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (email, password) => {
            dispatch(signIn(email, password));
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