import React, { Component } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';


class Customer extends Component {
    render() {
        return (
            <View>
                <View style={ styles.header }>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{color: '#fff', fontSize: 28 }}>Customers</Text>
                        </View>
                        <TouchableOpacity style={{ position: "absolute", top: 0, left: 0, height: 80, width: 80, justifyContent: 'center', alignItems: 'center'}}
                             onPress={ this.backToLogin }
                        >
                            <IconEntypo
                                name='menu'
                                size={50}
                                color='#fff'
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ position: "absolute", top: 0, right: 0, height: 80, width: 80, justifyContent: 'center', alignItems: 'center'}}
                             onPress={ this.backToLogin }
                        >
                            <AntDesign
                                name='search1'
                                size={50}
                                color='#fff'
                            />
                        </TouchableOpacity>
                    </View>
               <Text>Customer</Text>
            </View>
        )
    }
}

export default Customer;

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