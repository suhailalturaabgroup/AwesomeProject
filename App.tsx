import React from 'react';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { StyleSheet, Text, Button, View } from 'react-native';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import About from './components/About';
import TabNav from './navigation/TabNav';
import Contact from './components/Contact';
import Services from './components/Services';
import { Ionicons } from '@expo/vector-icons'; 
import { StackTabParamList } from './types'
import {DrawerNavigationProp } from '@react-navigation/drawer'

const RootStack = createStackNavigator();

function App({navigation}: StackScreenProps<StackTabParamList, 'Home'>) {
  return (
    
      <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#1ACB97',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}

          
          
      >
        <RootStack.Screen name="Home"component={TabNav}
           
            options={{
            title: 'My Home Screen',
           headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            // headerLeft: () => (            
            //   <Ionicons name="menu" size={32} color="black"  onPress={() => navigation.openDrawer()} />
            // ),
            
          }}
        />
        <RootStack.Screen name="About" component={About}/>
        <RootStack.Screen name="Service" component={Services}/>
        <RootStack.Screen name="Contact" component={Contact}/>
        
      </RootStack.Navigator>
   
      </NavigationContainer>
   
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
