import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground, TextInput, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import { setNotification } from '../actions/app/actions';
import FlashMessage from "react-native-flash-message";
import { showMessage, hideMessage } from "react-native-flash-message";

class Notification extends React.Component {

	componentDidUpdate(prevProps, prevState) {
        const { message, type } = this.props.notification;
        showMessage({
            message,
            type
        });
	}
    render () {
        return (
            <View style={{position: 'absolute', width: '100%'}}>
                <View ref={"otherView1"} />
                <View ref={"otherView2"} />
                <View ref={"otherView3"} />
                <FlashMessage position="top" />
            </View>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        setNotification: (email, password) => {
            dispatch(setNotification({
                isShowing: true,
                type: 'success',
                message: null,
            }));
        }
    }
}

const mapStateToProps = state => ({
    notification: state.app.notification
})

export default connect(mapStateToProps, mapDispatchToProps)(Notification);