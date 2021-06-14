import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const BgShadow = () => {

  return (
    
      <View style={{flex:1, flexDirection: 'row'}}>
      <View
        style={styles.box}
      />
      <View
        style={styles.box}
      />
      <View
        style={styles.box}
      />
      <View
        style={styles.box}
      />
      <View
        style={styles.box}
      />
      <View
        style={styles.box}
      />
      <View
        style={styles.box}
      />
      <View
        style={styles.box}
      />
      <View
        style={styles.box}
      />
      <View
        style={styles.box}
      />
      <View
        style={styles.box}
      />
      <View
        style={styles.box}
      />
      <View
        style={styles.box}
      />
     
      </View>
      
     
   
  );
};

const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 8,
//     backgroundColor: "aliceblue",
//   },
  box: {
    width: 25,
    height: "100%",
    marginLeft:8,
    backgroundColor: "#07582E",
    shadowColor: 'red',
    shadowOffset: { width: 5, height: 1 },
    shadowOpacity: 8,
    shadowRadius: 8,  
    elevation: 7
  
  },
 
});

export default BgShadow;