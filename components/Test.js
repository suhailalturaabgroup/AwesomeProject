import * as React from 'react';
import { Button, TouchableOpacity, StyleSheet, View, Text } from 'react-native';


const Test = ({route, navigation}) =>{
    const {id, names} = route.params;
    return(
        
        <View>
            <Text>Id:{id}</Text>
            <Text>name:{names}</Text>
        </View>
    )
}


export default Test;