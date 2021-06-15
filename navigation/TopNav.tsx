import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();


const Category = () => {

    return(

        <View>
            <View style={{flex:1, alignItems: "center", marginTop:10 }}>
                <Image style={{maxWidth:380, borderRadius:5, height: 80}} source={require('../assets/img/grocery-sale.jpg')} />
            </View>
        </View>
    )
}

const Food = () => {

    return(

        <View>
            <Text>Settings Screen</Text>
        </View>
    )
}

const Life = () => {

    return(

        <View>
            <Text>Settings Screen</Text>
        </View>
    )
}

function MyTabs() {
  return (
    <Tab.Navigator
        tabBarOptions={{
            activeTintColor: '#19B960',
            inactiveTintColor: '#2F2F2F',
            labelStyle: {fontSize: 14, textTransform: 'none'},
            tabStyle: { width: 100 },
            
        }}
            
    
    >
      <Tab.Screen name="Category" component={Category} />
      <Tab.Screen name="Food" component={Food} />
      <Tab.Screen name="LifeStyle" component={Life} />
    </Tab.Navigator>
  );
}



export default MyTabs;



const styles = StyleSheet.create({
   
showTabs: {
    // textTransform: 'lowercase'
}

})