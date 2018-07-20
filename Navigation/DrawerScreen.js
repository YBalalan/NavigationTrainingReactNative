import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';



export default class DrawerScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={[{ width: 120, height:40, flexDirection:'row', marginTop:10 , justifyContent:'center' , backgroundColor: "red" }]}>
          <Button
            onPress={this.buttonClickListener}
            title="PageFour"
            color="#FF3D00"
            onPress={()=>this.props.navigation.navigate('PageFour')}
          />
        </View>
        <View style={[{ width: 120, height:40, flexDirection:'row', justifyContent:'center',marginTop:10 , backgroundColor: "red" }]}>
          <Button
            onPress={this.buttonClickListener}
            title="PageFive"
            color="#FF3D00"
            onPress={()=>this.props.navigation.navigate('PageFive')}
          />
        </View>
        </View>
        
           )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:'column',
      alignItems:'center',
      backgroundColor: '#585858',
      
    },

   })  