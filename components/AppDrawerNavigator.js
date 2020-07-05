import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';
import firebase from 'firebase';
import {AppTabNavigator} from './AppTabNavigator';
import CustomSideBarMenu from './CustomSidebarMenu';
import SettingScreen from '../screens/SettingScreen'

export const AppDrawerNavigator = createDrawerNavigator({
    Home:{screen:AppTabNavigator},
    Setting:{screen:SettingScreen},
},
{
    contentComponent:CustomSideBarMenu
},
{
    initialRouteName:'Home'
})
