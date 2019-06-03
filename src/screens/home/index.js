import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import CheckIn from '../checkin';
import Leaving from '../leaving';
import Notify from '../notify';

const TabNavigator = createBottomTabNavigator({
    CheckIn: {
        screen: CheckIn,
        navigationOptions: ({ }) => ({
            title: 'Chấm Công',
        })
    },
    Leaving: {
        screen: Leaving,
        navigationOptions: ({ }) => ({
            title: 'Xin Phép',
        })
    },
    Notify: {
        screen: Notify,
        navigationOptions: ({ }) => ({
            title: 'Thông Báo',
        })
    }
});

export default createAppContainer(TabNavigator);