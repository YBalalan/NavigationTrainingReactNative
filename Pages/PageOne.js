/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
 
  StyleSheet,
  Text,
  View,
  Picker,
  AppState,
} from 'react-native';


import {Button,Icon} from 'native-base';
import PushNotification from 'react-native-push-notification';
import PushController from './PushController.js';


export default class PageOne extends React.Component {
  constructor (props){
    super(props);

    this.handleAppStateChange = this.handleAppStateChange.bind(this);
    this.state = {
       seconds:5,
     
      }
   

   
    
  }
  
 
 
 
  static navigationOptions=({ navigation }) =>{
 
    const { params } = navigation.state
   


    return {
      headerLeft:(
        <Button transparent onPress = {() => params._openNav()} >
          <Icon name="menu" style={{ fontSize:30, color:'white' }} />
        </Button>
      )
    }
  }

  componentDidMount(){
    this.props.navigation.setParams({
      _openNav: () => this.openDrawer()
      })
      AppState.addEventListener('change',this.handleAppStateChange);
     }

     componentWillUnmount(){
       AppState.removeEventListener('change',this.handleAppStateChange);
     }

     handleAppStateChange(appState){
      
       if(appState==='background'){
        console.warn(this.state.seconds)
        PushNotification.localNotificationSchedule({
            message:"My Notification Message",
            date: new Date(Date.now() + (this.state.seconds * 1000))
          
          })
          
       }
     }
  

  openDrawer(){
    this.props.navigation.openDrawer();
   }


  render() {
    return (
      <View style={styles.container}>
        <Text>Select Notification Time</Text>
        <Picker style={styles.picker} selectedValue={this.state.seconds}
                onValueChange={(seconds)=>this.setState({ seconds })}>
          <Picker.Item label="5" value={5}/>      
          <Picker.Item label="10" value={10}/> 
          <Picker.Item label="15" value={15}/> 

        </Picker>
        <PushController/>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

  picker:{
    width:100,
  }
});
