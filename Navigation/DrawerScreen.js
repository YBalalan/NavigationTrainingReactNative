import React from 'react';
import {View,Text,Button} from 'react-native';



export default class DrawerScreen extends React.Component{
    render(){
        return(
            <View>
                <Text>I amm here</Text>
                
              <Button
                title="PageFour" onPress={() => this.props.navigation.navigate('PageFour')}
                />
               <Button title= "Page Five" onPress={()=>this.props.navigation.navigate('PageFive')} />
            </View>
        )
    }
}