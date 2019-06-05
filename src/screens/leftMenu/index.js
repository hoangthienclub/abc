import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
class LeftMenu extends Component {
    render() {
        return (
            <View style={{ flex: 1}}>
                <View style={{ flex: 30 }}>

                </View> 
                <View style={{ flex: 1, alignItems: 'center'}}>
                    <Text>1.0.0.201190625</Text>
                </View>
            </View>
        )
    }
}

export default LeftMenu;