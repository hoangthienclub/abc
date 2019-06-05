import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import Customer from '../customer';
import LeftMenu from '../leftMenu';

const drawerNavigator = createDrawerNavigator(
    {
        Customer: Customer
    }, {
        contentComponent: props => <LeftMenu {...props} />
});

export default createAppContainer(drawerNavigator);