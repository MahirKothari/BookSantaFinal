import React,{Component}from 'react'; 
import {Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import BookDonateScreen from '../screens/BookDonateScreen'
import BookRequestScreen from '../screens/BookRequestScreen'

export const AppTabNavigator = createBottomTabNavigator({
    DonateBooks:{
        screen:BookDonateScreen,
        navigationOptions:{
            tabBarIcon:<Image source = {require('../assets/book1.png')} style = {{width:20,height:20}}>

                       </Image>,
                       tabBarLabel:"DonateBooks"
        }
    },
    BookRequest:{
        screen:BookRequestScreen,
        navigationOptions:{
            tabBarIcon:<Image source = {require('../assets/book2.png')} style = {{width:20,height:20}}>

            </Image>,
            tabBarLabel:"BookRequest"
        }
    }
})