import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text, StyleSheet ,Alert} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';
import firebase from 'firebase';
import { RecyclerViewBackedScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
 
export default class CustomSideBarMenu extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <View style = {styles.drawerContainer}>
            <DrawerItems {
                ...this.props
            }>
                
            </DrawerItems>
                </View>
                <View style = {styles.logOutContainer}>
            <TouchableOpacity style = {styles.logOutButton} onPress = {()=>{
                this.props.navigation.navigate('WelcomeScreen')
                firebase.auth().signOut()
            }}>
                <Text style = {{textAlign:'center',fontSize:20,fontWeight:'bold'}}>
                 logOut               
                </Text>
            </TouchableOpacity>
                </View>
            </View>
        )
    }
}
var styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:100
    },
    drawerContainer:{
        flex:0.6 ,
        marginTop:100
    },
    logOutContainer:{
        flex:0.3,
        justifyContent:'flex-end',
        paddingBottom:30
    },
    logOutButton:{
        height:50,
        backgroundColor:'orange',
        borderRadius:10,
        width:'100%',
        justifyContent:'center',
        padding:10,
    },
    logOutText:{
        fontSize:30,
        fontWeight:'bold'
    }
})