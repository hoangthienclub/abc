import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { setNotification } from '../actions/app/actions';

class Notification extends React.Component {
    render () {
        console.log(this.props.notification)
        return (
            <View style={{
                width: 200, height: 200, backgroundColor: 'red'
            }}>
                <Text>day la noi dung</Text>
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
    notification: state.app
})

export default connect(mapStateToProps, mapDispatchToProps)(Notification);