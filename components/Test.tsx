import React from 'react';
import {View, Image, ScrollView, Text} from 'react-native';

const Test = () => {
  const array = [
    {
      key: '1',
      title: 'example title 1',
      image: 'https://image.freepik.com/free-photo/female-student-with-books-paperworks_1258-48204.jpg',
    },
    {
      key: '2',
      title: 'example title 2',
      image: 'https://image.freepik.com/free-photo/female-student-with-books-paperworks_1258-48204.jpg',
    },
    {
      key: '3',
      title: 'example title 3',
      image: 'https://image.freepik.com/free-photo/female-student-with-books-paperworks_1258-48204.jpg',
    },
  ];

  const list = () => {
    return array.map((element) => {
      return (
        <ScrollView horizontal>
        <View style={{flex:1, flexDirection: 'row', backgroundColor: "red"}}>        
        <View  key={element.key}>
          <Text>{element.title}</Text>
          <Image source={{uri: element.image }} style={{width:200, height:200}}/>
        </View>
        
        
        </View>
        </ScrollView>
      );
    });
  };

  return <View>{list()}</View>;
};

export default Test;