import React from 'react';
import { SafeAreaView, View, ScrollView, TouchableWithoutFeedback, FlatList, StyleSheet, Image, Text, StatusBar } from 'react-native';

const data = [
  {
    id: '1',
    title : 'https://image.freepik.com/free-photo/cheerful-attractive-young-woman-with-black-hair-walking_1262-19104.jpg'
  },
  {
    id: '2',
    title: 'https://image.freepik.com/free-photo/cheerful-attractive-young-woman-with-black-hair-walking_1262-19104.jpg',
  },
  {
    id: '3',
    title: 'https://image.freepik.com/free-photo/girl-sitting-books_1149-237.jpg',
  },
];
const List = () => 
            {
 
  return (
    
     <ScrollView>    
                <View>
                    {data.map((item)=> {
                        // console.log(item)
                        <Text>{item.title}</Text>
                    })}
                </View>
          </ScrollView>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default List;