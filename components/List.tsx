import React, {useState} from 'react';
import { SafeAreaView, View, ScrollView, TouchableWithoutFeedback, 
  FlatList, StyleSheet, Image, Text, StatusBar } from 'react-native';
  import { useFonts } from 'expo-font';
 
 const data = [
  {
    id: '1',    
    src: 'https://www.jiomart.com/images/product/420x420/590309512/mango-kesar-4-pcs-box-approx-800-g-1200-g-0-20210422.jpg',
    text1: 'Fruits and Vegetable'
  },
  
  {
    id: '2',
    src: 'https://www.jiomart.com/images/product/420x420/491092292/pro-nature-organic-raw-peanuts-500-g-0-20210305.jpg',
    text1: 'Groceries'
  },
  {
    id: '3',
    src: 'https://www.jiomart.com/images/product/420x420/490001392/amul-butter-500-g-carton-0-20210315.jpg',
    text1: 'Dairy Products'
  },
  
 
];
const List = () => {

  
    const [loaded] = useFonts({
      Montserrat: require('../assets/fonts/Montserrat-Thin.ttf')
    });

    if (!loaded) {
      return null;
    }
 
  return (
      <View style={styles.container}>
        <FlatList horizontal
         data={data}
         renderItem={({ item }) => (
          
          <View>
            <Image source={{uri: item.src}} style={{width:120, height:90, marginLeft:10}} />
            <Text style={styles.text}>{item.text1}</Text>
          </View>

         )}
         keyExtractor={item => item.id}
        />
      </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 0,
    marginLeft: 5,
    marginVertical: 8,
    marginHorizontal: 10,
    fontFamily: "Montserrat-Thin"
  },
  text: {
    fontSize: 13,
    textAlign: "center",
    fontFamily: "Montserrat-Thin"
  },
});

export default List;