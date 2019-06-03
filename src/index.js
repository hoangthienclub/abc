import React, { Component } from 'react';

import { connect } from 'react-redux'

import Auth from './screens/auth';
import Home from './screens/home';

class App extends Component {

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
