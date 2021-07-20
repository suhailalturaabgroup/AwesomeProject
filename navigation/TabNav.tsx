import * as React from 'react';
import { Button, TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import About from '../components/About';
import Services from '../components/Services'
import Contact from '../components/Contact';
import Home from '../components/HomeScreen/Home';
import { Fontisto, MaterialCommunityIcons, FontAwesome, EvilIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
export default function TabNav() {

  return (
    <Tab.Navigator initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#19B960',
        inactiveTintColor: '#2F2F2F',

        activeBackgroundColor: "tomato",

        labelStyle: {
          fontSize: 14
        }
      }}
    >
      <Tab.Screen
        name="Home"

        component={Home}
        options={{
          // tabBarLabel: 'Home',

          tabBarIcon: ({ color, size }) => (
            <Fontisto name="home" size={24} color="#19B960" />
          ),
        }}
      />
      <Tab.Screen name="Near me" component={About}
        options={{
          // tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }: any) => (
            <EvilIcons name="location" size={24} color={'#19B960'} />
          ),
        }}

      />
      <Tab.Screen name="Subscription" component={Services}
        options={{
          // tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="subtitles-outline" size={24} color="#19B960" />
          ),
        }}
      />
      <Tab.Screen name="Cart" component={Contact}
        options={{
          // tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cart-outline" size={24} color="#19B960" />
          ),
        }}

      />
      <Tab.Screen name="Profile" component={Contact}
        options={{
          // tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={24} color="#19B960" />
          ),
        }}
      />


    </Tab.Navigator>
  )
}
