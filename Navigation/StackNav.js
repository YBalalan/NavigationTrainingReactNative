import { StackNavigator } from 'react-navigation'
import PageOne from '../Pages/PageOne.js'
import PageTwo from '../Pages/PageTwo.js'


export default StackHome = StackNavigator({
    PageOne:{
        screen:PageOne,
        navigationOptions:()=>({
            title:'ScreenOne'
        })
    },

    PageTwo:{
        screen:PageTwo,
        navigationOptions:()=>({
            title:'ScreenTwo'
        })
    }
},{
        initialRouteName:'PageTwo'
    
})