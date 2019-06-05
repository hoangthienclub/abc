import React, { Component } from 'react';
import { View, Image, ImageBackground } from 'react-native';

import { connect } from 'react-redux'

import Auth from './screens/auth';
import Home from './screens/home';
import SplashScreen from 'react-native-splash-screen'
class App extends Component {

    componentDidMount() {
    	// do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
        SplashScreen.hide();
    }
    render() {
        let loggedIn = false
        if (this.props.auth.user.token) {
            loggedIn = true
        }
        if (loggedIn) {
            return (
                <Home />
            )
        }
        return (
            <ImageBackground source={require('./assets/Background.png')} style={{ width:'100%', height: '100%' }}>
                { loggedIn? <Home />: <Auth style={{ backgroundColor: 'transparent'}}/> }
            </ImageBackground>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, null)(App);
