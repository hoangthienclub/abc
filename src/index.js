import React, { Component } from 'react';

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
            <Auth />
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, null)(App);
