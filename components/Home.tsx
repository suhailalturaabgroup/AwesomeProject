import * as React from 'react';
import { Button, TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { Ionicons } from '@expo/vector-icons'; 
import { NavigationContainer, DrawerActions, StackActions, } from '@react-navigation/native';
import MySlider from './Login';


function Home() {

 
  return (
           
  
          
              <MySlider/>
           
            
          
         
  );
}




export default Home;

const styles = StyleSheet.create({

header: {
  flex:1,
  marginTop:10
},

text: {
  textAlign:"center",
  color: "black",
  fontSize: 20

},

para: {
  margin:5,
  padding:5,
  textAlign: "justify"

}

})