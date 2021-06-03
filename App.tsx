import * as React from 'react';
import { NavigationContainer, DrawerActions, StackActions, } from '@react-navigation/native';
import { StyleSheet, Text, Button, View, TouchableOpacity } from 'react-native';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import { StackTabParamList, RootStackParamList } from './types';
import Home from './components/Home';
import About from './components/About';
import TabNav from './navigation/TabNav';

const RootStack = createStackNavigator();



function App() {

  return (

     <NavigationContainer>
       <RootStack.Navigator>
       <RootStack.Screen name="Home" component={TabNav} />
       <RootStack.Screen name="About" component={About} />
       </RootStack.Navigator>

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
