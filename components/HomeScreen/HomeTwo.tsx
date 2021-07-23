import React, { useState } from 'react';
import {
  SafeAreaView, View, ScrollView, TouchableWithoutFeedback,
  FlatList, StyleSheet, Image, Text, StatusBar
} from 'react-native';
import { useFonts } from 'expo-font';
import {styles} from '../stylesheet/homeTwo';

// const data = [
//   {
//     id: '1',
//     src1: 'https://www.jiomart.com/images/product/420x420/590309512/mango-kesar-4-pcs-box-approx-800-g-1200-g-0-20210422.jpg',
//     src2: 'https://www.jiomart.com/images/product/420x420/490675817/aashirvaad-multigrain-atta-5-kg-0-20210604.jpg',
//     src3: 'https://www.jiomart.com/images/product/420x420/590116903/britannia-good-day-cashew-biscuits-1-kg-0-20210421.jpg',
//     src4: 'https://www.jiomart.com/images/product/420x420/590126857/sunfeast-dark-fantasy-choco-chip-biscuits-350-g-0-20210217.jpg',
//     text1: 'Snack Maina(12)',
//     text2: 'Pringles, Namdhari Cashew \nNuts, Milk, Bread, \nCocacola & More...',
//     text3: 'Weekly   Monday   7:00 AM'
//   },

//   {
//     id: '2',
//     src1: 'https://www.jiomart.com/images/product/420x420/590309512/mango-kesar-4-pcs-box-approx-800-g-1200-g-0-20210422.jpg',
//     src2: 'https://www.jiomart.com/images/product/420x420/490675817/aashirvaad-multigrain-atta-5-kg-0-20210604.jpg',
//     src3: 'https://www.jiomart.com/images/product/420x420/590116903/britannia-good-day-cashew-biscuits-1-kg-0-20210421.jpg',
//     src4: 'https://www.jiomart.com/images/product/420x420/590126857/sunfeast-dark-fantasy-choco-chip-biscuits-350-g-0-20210217.jpg',
//     text1: 'Snack Maina(12)',
//     text4: 'Weekly Veggie Delight Namdhari \nmilk, Atta, Potato, Tomato \nSpinach & more...',
//     text3: 'Weekly  Monday   7:00 AM'
//   },

// ];


const HomeTwo = () => {
  const [loaded] = useFonts({
    Home2Montserrat: require('../../assets/fonts/Montserrat-Regular.ttf')
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      {/* <Text style={{padding: 10, color: "#fff", marginLeft: 5, fontSize: 15}}>Subscription for you</Text> */}
      {/* <FlatList horizontal
        data={data}
        renderItem={({ item }) => (
          <View style={{ flex: 1, flexDirection: "column", padding:10}}>
            <View style={styles.menuItem}>
              <Image source={{ uri: item.src1 }} style={{ width: 35, height: 30, marginLeft: 5}} />              
              <Image source={{ uri: item.src2 }} style={{ width: 35, height: 30, marginLeft: 12 }} />
              <Image source={{ uri: item.src3 }} style={{ width: 35, height: 30, marginLeft: 12 }} />
              <Image source={{ uri: item.src4 }} style={{ width: 35, height: 30, marginLeft: 12 }} />
              <View style={{ position: "absolute", flex: 1, flexDirection: "row", marginTop: 50, }}>
                <Image source={{ uri: item.src1 }} style={{ width: 35, height: 30, marginLeft: 9 }} />
                <Image source={{ uri: item.src2 }} style={{ width: 35, height: 30, marginLeft: 12 }} />
                <Image source={{ uri: item.src3 }} style={{ width: 35, height: 30, marginLeft: 12 }} />
                <Image source={{ uri: item.src4 }} style={{ width: 35, height: 30, marginLeft: 12 }} />
                <Text style={styles.text}>{item.text1}</Text>
                <Text style={styles.text2}>{item.text2}</Text>
                <Text style={styles.text2}>{item.text4}</Text>
                <Text style={styles.text3}>{item.text3}</Text>
                
              </View>                
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
      /> */}
      <Text style={{ padding: 10, color: "#fff", marginLeft: 5, fontSize: 17 }}>Subscription for you</Text>
      <ScrollView horizontal>
        <View style={styles.list}>
          <View style={styles.list1}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ backgroundColor: "#DDDEDD", marginLeft: 5, paddingTop: 5, width: 50, height: 50 }}>
                <Image source={{ uri: 'https://www.jiomart.com/images/product/420x420/590126857/sunfeast-dark-fantasy-choco-chip-biscuits-350-g-0-20210217.jpg' }}
                  style={{ width: 40, justifyContent: "center", height: 40, marginLeft: 5 }} /></View>
              <View style={{ backgroundColor: "#DDDEDD", marginLeft: 5, paddingTop: 5, width: 50, height: 50 }}><Image source={{ uri: 'https://www.jiomart.com/images/product/420x420/590309512/mango-kesar-4-pcs-box-approx-800-g-1200-g-0-20210422.jpg' }} style={{ width: 40, justifyContent: "center", height: 40, marginLeft: 5 }} /></View>
              <View style={{ backgroundColor: "#DDDEDD", marginLeft: 5, paddingTop: 5, width: 50, height: 50 }}><Image source={{ uri: 'https://www.jiomart.com/images/product/420x420/590116903/britannia-good-day-cashew-biscuits-1-kg-0-20210421.jpg' }} style={{ width: 40, justifyContent: "center", height: 40, marginLeft: 5 }} /></View>
              <View style={{ backgroundColor: "#DDDEDD", marginLeft: 5, paddingTop: 5, width: 50, height: 50 }}><Image source={{ uri: 'https://www.jiomart.com/images/product/420x420/490675817/aashirvaad-multigrain-atta-5-kg-0-20210604.jpg' }} style={{ width: 40, justifyContent: "center", height: 40, marginLeft: 5 }} /></View>
            </View>
            <View style={{ flexDirection: "row", marginTop: 7 }}>
              <View style={{ backgroundColor: "#DDDEDD", marginLeft: 5, paddingTop: 5, width: 50, height: 50 }}>
                <Image source={{ uri: 'https://www.jiomart.com/images/product/420x420/590309512/mango-kesar-4-pcs-box-approx-800-g-1200-g-0-20210422.jpg' }}
                  style={{ width: 40, justifyContent: "center", height: 40, marginLeft: 5 }} /></View>
              <View style={{ backgroundColor: "#DDDEDD", marginLeft: 5, paddingTop: 5, width: 50, height: 50 }}><Image source={{ uri: 'https://www.jiomart.com/images/product/420x420/490675817/aashirvaad-multigrain-atta-5-kg-0-20210604.jpg' }} style={{ width: 40, justifyContent: "center", height: 40, marginLeft: 5 }} /></View>
              <View style={{ backgroundColor: "#DDDEDD", marginLeft: 5, paddingTop: 5, width: 50, height: 50 }}><Image source={{ uri: 'https://www.jiomart.com/images/product/420x420/590116903/britannia-good-day-cashew-biscuits-1-kg-0-20210421.jpg' }} style={{ width: 40, justifyContent: "center", height: 40, marginLeft: 5 }} /></View>
              <View style={{ backgroundColor: "#DDDEDD", marginLeft: 5, paddingTop: 5, width: 50, height: 50 }}><Image source={{ uri: 'https://www.jiomart.com/images/product/420x420/590126857/sunfeast-dark-fantasy-choco-chip-biscuits-350-g-0-20210217.jpg' }} style={{ width: 40, justifyContent: "center", height: 40, marginLeft: 5 }} /></View>
            </View>
            <View>
              <Text style={styles.text}>Snack Maina(12)</Text>
              <Text style={styles.textTwo}>Pringles, Namdhari Cashew Nuts, Milk, Bread, \nCocacola & More...</Text>
              <Text style={styles.textThree}>Weekly   Monday   7:00 AM</Text>
            </View>
          </View>
        </View>

        <View style={styles.list}>
          <View style={styles.list1}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ backgroundColor: "#DDDEDD", marginLeft: 5, paddingTop: 5, width: 50, height: 50 }}>
                <Image source={{ uri: 'https://www.jiomart.com/images/product/420x420/590126857/sunfeast-dark-fantasy-choco-chip-biscuits-350-g-0-20210217.jpg' }}
                  style={{ width: 40, justifyContent: "center", height: 40, marginLeft: 5 }} /></View>
              <View style={{ backgroundColor: "#DDDEDD", marginLeft: 5, paddingTop: 5, width: 50, height: 50 }}><Image source={{ uri: 'https://www.jiomart.com/images/product/420x420/590309512/mango-kesar-4-pcs-box-approx-800-g-1200-g-0-20210422.jpg' }} style={{ width: 40, justifyContent: "center", height: 40, marginLeft: 5 }} /></View>
              <View style={{ backgroundColor: "#DDDEDD", marginLeft: 5, paddingTop: 5, width: 50, height: 50 }}><Image source={{ uri: 'https://www.jiomart.com/images/product/420x420/590116903/britannia-good-day-cashew-biscuits-1-kg-0-20210421.jpg' }} style={{ width: 40, justifyContent: "center", height: 40, marginLeft: 5 }} /></View>
              <View style={{ backgroundColor: "#DDDEDD", marginLeft: 5, paddingTop: 5, width: 50, height: 50 }}><Image source={{ uri: 'https://www.jiomart.com/images/product/420x420/490675817/aashirvaad-multigrain-atta-5-kg-0-20210604.jpg' }} style={{ width: 40, justifyContent: "center", height: 40, marginLeft: 5 }} /></View>
            </View>
            <View style={{ flexDirection: "row", marginTop: 7 }}>
              <View style={{ backgroundColor: "#DDDEDD", marginLeft: 5, paddingTop: 5, width: 50, height: 50 }}>
                <Image source={{ uri: 'https://www.jiomart.com/images/product/420x420/590309512/mango-kesar-4-pcs-box-approx-800-g-1200-g-0-20210422.jpg' }}
                  style={{ width: 40, justifyContent: "center", height: 40, marginLeft: 5 }} /></View>
              <View style={{ backgroundColor: "#DDDEDD", marginLeft: 5, paddingTop: 5, width: 50, height: 50 }}><Image source={{ uri: 'https://www.jiomart.com/images/product/420x420/490675817/aashirvaad-multigrain-atta-5-kg-0-20210604.jpg' }} style={{ width: 40, justifyContent: "center", height: 40, marginLeft: 5 }} /></View>
              <View style={{ backgroundColor: "#DDDEDD", marginLeft: 5, paddingTop: 5, width: 50, height: 50 }}><Image source={{ uri: 'https://www.jiomart.com/images/product/420x420/590116903/britannia-good-day-cashew-biscuits-1-kg-0-20210421.jpg' }} style={{ width: 40, justifyContent: "center", height: 40, marginLeft: 5 }} /></View>
              <View style={{ backgroundColor: "#DDDEDD", marginLeft: 5, paddingTop: 5, width: 50, height: 50 }}><Image source={{ uri: 'https://www.jiomart.com/images/product/420x420/590126857/sunfeast-dark-fantasy-choco-chip-biscuits-350-g-0-20210217.jpg' }} style={{ width: 40, justifyContent: "center", height: 40, marginLeft: 5 }} /></View>
            </View>
            <View>
              <Text style={styles.text}>Snack Maina(12)</Text>
              <Text style={styles.textTwo}>Pringles, Namdhari Cashew Nuts, Milk, Bread, \nCocacola & More...</Text>
              <Text style={styles.textThree}>Weekly   Monday   7:00 AM</Text>
            </View>
          </View>
        </View>
        
      </ScrollView>
    </View>
  );
}


export default HomeTwo;
