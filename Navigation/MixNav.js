import { DrawerNavigator,StackNavigator,TabNavigator,createBottomTabNavigator } from 'react-navigation';
import PageOne from '../Pages/PageOne.js'
import PageTwo from '../Pages/PageTwo.js'
import PageThree from '../Pages/PageThree.js'
import PageFour from '../Pages/PageFour.js'
import PageFive from '../Pages/PageFive.js'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import  DrawerScreen from './DrawerScreen.js'




  const Home = StackNavigator({
    PageFour:{
        screen:PageFour,
    },

    PageFive:{
        screen:PageFive,
    },

    PageOne:{
        screen:PageOne,
        navigationOptions:()=>({
            title:'Home',
            headerTintColor:'white',
            headerStyle:{
                backgroundColor:'royalblue',
                elevation: 0,
                showdownOpacity:0,
            },
        })
     },
   },{
      initialRouteName:'PageOne',
    })

  const Last= StackNavigator({
    PageThree:{
        screen:PageThree,
        navigationOptions:()=>({
            title:'Search',
            })
    }
  } ,{
})


  const SecondPage=StackNavigator({
    PageTwo:{
        screen:PageTwo,
       navigationOptions:()=>({
            title:'news',
     })
    },
  },{
  })

   const TabNav = createBottomTabNavigator({
      Home:Home,
      Search:SecondPage,
      New:Last,
  },{
    navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'Home') {
            iconName = `md-home`;
          } else if (routeName === 'Search') {
            iconName = `ios-search`;
          }else if(routeName === 'New'){
              iconName = 'logo-hackernews'
          }
       return <Ionicons name={iconName} size={25} color={tintColor} />;
        },
      }),
    tabBarOptions:{
        showIcon:true,
        style:{
            backgroundColor:'royalblue',
        },
        activeTintColor:'black',
    }
})




export default Drawer=DrawerNavigator({
    Tabs:{
        screen:TabNav,
    },
  },{
  contentComponent:props=><DrawerScreen {...props} />
})