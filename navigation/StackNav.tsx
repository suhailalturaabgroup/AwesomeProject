import * as React from 'react';
import { NavigationContainer, DrawerActions, StackActions, } from '@react-navigation/native';
import { StyleSheet, Text, Button, View, TouchableOpacity } from 'react-native';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import { StackTabParamList, RootStackParamList } from '../types';
import About from '../components/About';
import Home from '../components/Home';
import TabNav from '../navigation/TabNav';
import { Ionicons } from '@expo/vector-icons';
// import DrawerNav from '../navigation/DrawarNav';
import Services from '../components/Services';
import Contact from '../components/Contact';
import { createDrawerNavigator } from '@react-navigation/drawer';

const RootStack = createStackNavigator();

function StackNav({ navigation }: StackScreenProps<StackTabParamList>) {
  return (
    <RootStack.Navigator
      screenOptions={{

        headerTitleStyle: {
          fontWeight: 'bold',
        },


        headerLeft: () =>
          <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <Ionicons name="menu" size={32} color="#000" />
          </TouchableOpacity>
      }}

    >
      <RootStack.Screen name="Home" component={TabNav}

        options={{
          title: "Home Page",
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: 'tomato',
            borderBottomWidth: 3,
            borderBottomColor: '#f2f42'

          }

        }}


      />

    </RootStack.Navigator>
  )

}



const RootStack1 = createStackNavigator();

function StackNav1() {
  return (
    <RootStack1.Navigator>
      <RootStack1.Screen name="About" component={About}></RootStack1.Screen>

    </RootStack1.Navigator>
  )

}

const RootStack2 = createStackNavigator();

function StackNav2() {
  return (
    <RootStack2.Navigator>
      <RootStack2.Screen name="Service" component={Services}></RootStack2.Screen>
    </RootStack2.Navigator>
  )

}


const RootStack3 = createStackNavigator();

function StackNav3() {
  return (
    <RootStack3.Navigator>
      <RootStack3.Screen name="Contact" component={Contact}></RootStack3.Screen>
    </RootStack3.Navigator>
  )

}

const Drawer = createDrawerNavigator();
function DrawerNav() {

  return (

    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={StackNav} />
      <Drawer.Screen name="About" component={StackNav1} />
      <Drawer.Screen name="Services" component={StackNav2} />
      <Drawer.Screen name="Contact" component={StackNav3} />


    </Drawer.Navigator>


  )
}




export default DrawerNav;