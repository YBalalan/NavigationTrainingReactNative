/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {Button,Icon} from 'native-base';


export default class PageOne extends React.Component {
 
  navOptions;
 
  static navigationOptions=({ navigation }) =>{
    navOptions =  navigation;
    const { params = {} } = navigation.state
    console.warn(navigation)
   


    return {
      headerLeft:(
        <Button transparent onPress = {() => params._onHeaderEventControl()} >
          <Icon name="menu" style={{ fontSize:30, color:'white' }} />
        </Button>
      )
    }
  }

  onHeaderEventControl(){   
    const { params = {}  } = navOptions.state;
    params._openNav() 
  }

  componentDidMount(){
    this.props.navigation.setParams({
      _onHeaderEventControl: this.onHeaderEventControl,
      _openNav: () => this.openDrawer()
    })
  }

   openDrawer(){
    this.props.navigation.openDrawer();
   }


  render() {
    return (
      <View style={styles.container}>
        <Text>ScreenOne</Text>
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
});
