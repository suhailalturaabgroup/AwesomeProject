import * as React from 'react';
import { NavigationContainer, DrawerActions, StackActions,  RouteProp} from '@react-navigation/native';
import { StyleSheet, Text, Button, View, TouchableOpacity } from 'react-native';
import { createStackNavigator, StackScreenProps,StackNavigationProp } from '@react-navigation/stack';
import { StackTabParamList, RootStackParamList, DrawerParamList } from '../types';
import About from '../components/About';
import TabNav from '../navigation/TabNav';
import { Ionicons } from '@expo/vector-icons';
import Services from '../components/Services';
import Contact from '../components/Contact';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerNavigationProp } from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';

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
          title: "Home",
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

function StackNav1({ navigation }: any) {
  return (
    <RootStack1.Navigator
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
      <RootStack1.Screen
        options={{
          title: "About Us",
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: 'tomato',
            borderBottomWidth: 3,
            borderBottomColor: '#f2f42'

          }

        }}
        name="About" component={About}></RootStack1.Screen>

    </RootStack1.Navigator>
  )

}

const RootStack2 = createStackNavigator();

function StackNav2({ navigation }: any) {
  return (
    <RootStack2.Navigator
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
      <RootStack2.Screen
        options={{
          title: "Services",
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: 'tomato',
            borderBottomWidth: 3,
            borderBottomColor: '#f2f42'

          }

        }}
        name="Service" component={Services}></RootStack2.Screen>
    </RootStack2.Navigator>
  )

}


const RootStack3 = createStackNavigator();

function StackNav3({ navigation }: any) {
  return (
    <RootStack3.Navigator
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
      <RootStack3.Screen
        options={{
          title: "Contact Us",
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: 'tomato',
            borderBottomWidth: 3,
            borderBottomColor: '#f2f42'

          }

        }}
        name="Contact" component={Contact}></RootStack3.Screen>
    </RootStack3.Navigator>
  )

}

const Drawer = createDrawerNavigator();
function DrawerNav() {

  return (

    <Drawer.Navigator initialRouteName="Home"
      drawerContent={(props) => <CustomDrawer {...props} />}
      openByDefault={false}
      drawerContentOptions={{
        activeBackgroundColor: "#F97A5E",
        activeTintColor: 'white',
        itemStyle: { marginTop: 20 },
        labelStyle: { fontSize: 16 },
        style: { backgroundColor: '#fff'},

      }}
    >
      <Drawer.Screen name="Home" component={StackNav} />
      <Drawer.Screen name="About" component={StackNav1} />
      <Drawer.Screen name="Services" component={StackNav2} />
      <Drawer.Screen name="Contact" component={StackNav3} />


    </Drawer.Navigator>


  )
}




export default DrawerNav;