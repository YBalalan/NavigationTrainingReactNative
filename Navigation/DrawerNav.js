import { DrawerNavigator,StackNavigator } from 'react-navigation';
import PageOne from '../Pages/PageOne.js'
import PageTwo from '../Pages/PageTwo.js'


   const StackPageOne = StackNavigator({
    PageOne:{
        screen:PageOne,
        navigationOptions:()=>({
            title:'Screen One',
            headerStyle:{
             backgroundColor:'red',
            }
        })
    }
})

    const StackPageTwo = StackNavigator({
    PageTwo:{
        screen:PageTwo,
        navigationOptions:()=>({
            title:'Screen Two',
            drawerLockMode: 'locked-closed'
        })
    }

})



export default  Drawer = DrawerNavigator({
    PageOne:{
        screen:StackPageOne,
    },
    PageTwo:{
        screen:StackPageTwo,
    }   
}) 