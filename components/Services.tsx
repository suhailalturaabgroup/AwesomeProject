import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
// import FlatListSlider from './FlatListSlider'

export default function Services({navigation }: any) {
    let a:number = 11;
    if(a == 10){
        console.log("right number")
    }else{

        console.log("wrong number")
    }

let sum = (x: number , y:number ): void => {
    console.log(x+y);
    
    
}

sum(10,20);

    // const { userId } = route.params;
    // const { userName } = route.params;

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20 }}>Details Screen</Text>
            <Button title="Service" onPress={()=>navigation.navigate('About')} />
            {/* <FlatListSlider/> */}
            
        </View>
    );
}