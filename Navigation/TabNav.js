import { DrawerNavigator,StackNavigator,TabNavigator,createBottomTabNavigator } from 'react-navigation';
import PageOne from '../Pages/PageOne.js'
import PageTwo from '../Pages/PageTwo.js'
import PageThree from '../Pages/PageThree.js'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React from 'react';

export default  TabNav = createBottomTabNavigator({
    PageOne:{
        screen:PageOne,
        navigationOptions:()=>({
            tabBarIcon:({ tintColor }) => {
                return(
                    <IconFontAwesome
                      name='home'
                      size={26}
                      color={tintColor}
                        />
                )
            }
        })
    },
    PageTwo:{
        screen:PageTwo,
        navigationOptions:()=>({
            tabBarIcon:({ tintColor }) => {
                return(
                    <IconMaterialIcons
                      name='branding-watermark'
                      size={26}
                      color={tintColor}
                        />
                )
            }
        })
    },
    
    PageThree:{
        screen:PageThree,
        navigationOptions:()=>({
            tabBarIcon:({ tintColor }) => {
                return(
                    <IconFontAwesome
                      name='home'
                      size={26}
                      color={tintColor}
                        />
                )
            }
        })
    }
},{
    tabBarOptions:{
        showIcon:true
    }
}) 