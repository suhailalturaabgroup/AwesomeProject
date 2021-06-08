import React from 'react';
import { Text, Dimensions, StyleSheet, View, Image } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';


const Slider = () => (
  <View style={styles.container}>
    <SwiperFlatList autoplay autoplayDelay={2} autoplayLoop index={2} showPagination>
      <View style={[styles.child, { backgroundColor: '' }]}>
        <Image style={{width:500, height:410}} source={{
          uri: 'https://image.freepik.com/free-photo/female-student-with-books-paperworks_1258-48204.jpg' }}
          />

      </View>
      <View style={[styles.child, { backgroundColor: 'thistle' }]}>
      <Image style={{width:500, height:410}} source={{
          uri: 'https://image.freepik.com/free-photo/young-student-woman-wearing-denim-jacket-eyeglasses-holding-colorful-folders-showing-thumb-up-pink_176532-13861.jpg' }}
          />
      </View>
      <View style={[styles.child, { backgroundColor: 'skyblue' }]}>
      <Image style={{width:500, height:410}} source={{
          uri: 'https://image.freepik.com/free-photo/young-attractive-smiling-student-showing-thumb-up-outdoors-campus-university_8353-6394.jpg' }}
          />
      </View>
      <View style={[styles.child, { backgroundColor: 'teal' }]}>
      <Image style={{width:500, height:410}} source={{
          uri: 'https://image.freepik.com/free-photo/female-student-with-books-paperworks_1258-48204.jpg' }}
          />
      </View>
    </SwiperFlatList>
  </View>
);

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  child: { width, justifyContent: 'center' },
  text: { fontSize: width * 0.5, textAlign: 'center' },
});

export default Slider;