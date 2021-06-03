import * as React from 'react';
import { NavigationContainer, DrawerActions, StackActions, } from '@react-navigation/native';
import { StyleSheet, Text, Button, View, TouchableOpacity } from 'react-native';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import { StackTabParamList, RootStackParamList } from './types';
import About from './components/About';
import TabNav from './navigation/TabNav';
import { Ionicons } from '@expo/vector-icons';
import DrawerNav from './navigation/DrawarNav';
// import StackNav from './navigation/StackNav';
const RootStack = createStackNavigator();

function App({ navigation }: StackScreenProps<RootStackParamList, 'NotFound'>) {

  return (

     <NavigationContainer>
      
            <DrawerNav/>
        
        
     </NavigationContainer>
    
      
   
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
